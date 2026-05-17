const path = require('path');
const http = require('http');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: true,
        credentials: true
    }
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-this-secret';
const NODE_ENV = process.env.NODE_ENV || 'development';

if (!MONGODB_URI) {
    console.error('缺少环境变量 MONGODB_URI');
    process.exit(1);
}

mongoose.set('strictQuery', true);

mongoose.connect(MONGODB_URI, {
    autoIndex: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connect error:', err);
    process.exit(1);
});

const petalSchema = new mongoose.Schema({
    petalId: { type: Number, default: 1 },
    rarity: { type: Number, default: 0 },
    name: { type: String, default: 'Basic' }
}, { _id: false });

const playerDataSchema = new mongoose.Schema({
    inventory: { type: [petalSchema], default: [] },
    loadout: {
        type: [petalSchema],
        default: () => ([
            { petalId: 1, rarity: 0, name: 'Basic' },
            { petalId: 1, rarity: 0, name: 'Basic' },
            { petalId: 1, rarity: 0, name: 'Basic' },
            { petalId: 1, rarity: 0, name: 'Basic' },
            { petalId: 1, rarity: 0, name: 'Basic' }
        ])
    }
}, { _id: false });

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    playerData: { type: playerDataSchema, default: () => ({}) }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

app.set('trust proxy', 1);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionMiddleware = session({
    name: 'myflorr.sid',
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: MongoStore.create({
        mongoUrl: MONGODB_URI,
        collectionName: 'sessions'
    })
});

app.use(sessionMiddleware);

io.engine.use(sessionMiddleware);

function normalizeLoadout(loadout) {
    const arr = Array.isArray(loadout) ? loadout.slice(0, 5) : [];
    const result = [];

    for (let i = 0; i < 5; i++) {
        const item = arr[i];
        if (!item) {
            result.push(null);
        } else {
            result.push({
                petalId: Number(item.petalId ?? 1) || 1,
                rarity: Number(item.rarity ?? 0) || 0,
                name: String(item.name || 'Basic')
            });
        }
    }

    return result;
}

function normalizeInventory(inventory) {
    if (!Array.isArray(inventory)) return [];
    return inventory.map(item => ({
        petalId: Number(item?.petalId ?? 1) || 1,
        rarity: Number(item?.rarity ?? 0) || 0,
        name: String(item?.name || 'Basic')
    }));
}

function isValidUsername(username) {
    if (typeof username !== 'string') return false;
    if (username.length < 3 || username.length > 15) return false;
    return /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/.test(username);
}

function isValidPassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 5 || password.length > 15) return false;
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;
}

function requireLogin(req, res, next) {
    if (!req.session || !req.session.userId || !req.session.username) {
        return res.status(401).json({
            success: false,
            loggedIn: false,
            message: '未登录'
        });
    }
    next();
}

const onlinePlayers = {};
const userToSocketId = new Map();

function buildSafePlayerData(socketId) {
    const p = onlinePlayers[socketId];
    if (!p) return null;

    return {
        username: p.username,
        worldX: p.worldX,
        worldY: p.worldY,
        currentDistance: p.currentDistance,
        rotationAngle: p.rotationAngle,
        facingAngle: p.facingAngle,
        attackBlend: p.attackBlend,
        defendBlend: p.defendBlend,
        petalCount: p.petalCount,
        loadout: p.loadout
    };
}

function broadcastGameState() {
    const snapshot = {};
    for (const socketId of Object.keys(onlinePlayers)) {
        snapshot[socketId] = buildSafePlayerData(socketId);
    }
    io.emit('gameState', snapshot);
}

app.get('/api/me', (req, res) => {
    if (req.session?.userId && req.session?.username) {
        return res.json({
            loggedIn: true,
            username: req.session.username
        });
    }
    return res.json({
        loggedIn: false
    });
});

app.post('/api/register', async (req, res) => {
    try {
        const username = String(req.body?.username || '').trim();
        const password = String(req.body?.password || '').trim();

        if (!isValidUsername(username)) {
            return res.json({
                success: false,
                message: '用户名不合法'
            });
        }

        if (!isValidPassword(password)) {
            return res.json({
                success: false,
                message: '密码不合法，需5-15位且同时包含字母和数字'
            });
        }

        const exists = await User.findOne({ username }).lean();
        if (exists) {
            return res.json({
                success: false,
                message: '用户名已存在'
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        await User.create({
            username,
            passwordHash,
            playerData: {
                inventory: [],
                loadout: [
                    { petalId: 1, rarity: 0, name: 'Basic' },
                    { petalId: 1, rarity: 0, name: 'Basic' },
                    { petalId: 1, rarity: 0, name: 'Basic' },
                    { petalId: 1, rarity: 0, name: 'Basic' },
                    { petalId: 1, rarity: 0, name: 'Basic' }
                ]
            }
        });

        return res.json({
            success: true,
            message: '注册成功，请登录'
        });
    } catch (err) {
        console.error('/api/register error:', err);
        return res.status(500).json({
            success: false,
            message: '服务器错误'
        });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const username = String(req.body?.username || '').trim();
        const password = String(req.body?.password || '').trim();

        const user = await User.findOne({ username });
        if (!user) {
            return res.json({
                success: false,
                message: '用户名或密码错误'
            });
        }

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) {
            return res.json({
                success: false,
                message: '用户名或密码错误'
            });
        }

        req.session.userId = String(user._id);
        req.session.username = user.username;

        await new Promise((resolve, reject) => {
            req.session.save(err => err ? reject(err) : resolve());
        });

        const oldSocketId = userToSocketId.get(user.username);
        if (oldSocketId && io.sockets.sockets.get(oldSocketId)) {
            io.to(oldSocketId).emit('sessionReplaced', {
                message: '你的账号已在其他地方登录'
            });
            const oldSocket = io.sockets.sockets.get(oldSocketId);
            if (oldSocket) {
                oldSocket.disconnect(true);
            }
        }

        return res.json({
            success: true,
            message: '登录成功',
            username: user.username
        });
    } catch (err) {
        console.error('/api/login error:', err);
        return res.status(500).json({
            success: false,
            message: '服务器错误'
        });
    }
});

app.post('/api/logout', requireLogin, async (req, res) => {
    try {
        const username = req.session.username;
        const socketId = userToSocketId.get(username);

        if (socketId) {
            const sock = io.sockets.sockets.get(socketId);
            if (sock) sock.disconnect(true);
            userToSocketId.delete(username);
        }

        req.session.destroy(err => {
            if (err) {
                console.error('/api/logout destroy error:', err);
                return res.status(500).json({
                    success: false,
                    message: '退出失败'
                });
            }

            res.clearCookie('myflorr.sid');
            return res.json({
                success: true,
                message: '已退出登录'
            });
        });
    } catch (err) {
        console.error('/api/logout error:', err);
        return res.status(500).json({
            success: false,
            message: '服务器错误'
        });
    }
});

app.get('/api/player-data', requireLogin, async (req, res) => {
    try {
        const user = await User.findById(req.session.userId).lean();
        if (!user) {
            return res.status(404).json({
                success: false,
                message: '用户不存在'
            });
        }

        const playerData = user.playerData || {};
        return res.json({
            success: true,
            data: {
                inventory: normalizeInventory(playerData.inventory),
                loadout: normalizeLoadout(playerData.loadout)
            }
        });
    } catch (err) {
        console.error('/api/player-data GET error:', err);
        return res.status(500).json({
            success: false,
            message: '服务器错误'
        });
    }
});

app.post('/api/player-data', requireLogin, async (req, res) => {
    try {
        const inventory = normalizeInventory(req.body?.inventory);
        const loadout = normalizeLoadout(req.body?.loadout);

        await User.findByIdAndUpdate(req.session.userId, {
            $set: {
                'playerData.inventory': inventory,
                'playerData.loadout': loadout
            }
        });

        return res.json({
            success: true
        });
    } catch (err) {
        console.error('/api/player-data POST error:', err);
        return res.status(500).json({
            success: false,
            message: '保存失败'
        });
    }
});

io.on('connection', async (socket) => {
    try {
        const req = socket.request;
        const session = req.session;

        if (!session?.userId || !session?.username) {
            socket.disconnect(true);
            return;
        }

        const username = session.username;

        const oldSocketId = userToSocketId.get(username);
        if (oldSocketId && oldSocketId !== socket.id) {
            const oldSocket = io.sockets.sockets.get(oldSocketId);
            if (oldSocket) {
                oldSocket.emit('sessionReplaced', {
                    message: '你的账号已在其他地方登录'
                });
                oldSocket.disconnect(true);
            }
        }

        userToSocketId.set(username, socket.id);

        const user = await User.findById(session.userId).lean();
        const savedLoadout = normalizeLoadout(user?.playerData?.loadout);
        const petalCount = savedLoadout.filter(Boolean).length;

        onlinePlayers[socket.id] = {
            userId: String(session.userId),
            username,
            worldX: 0,
            worldY: 0,
            currentDistance: 45,
            rotationAngle: 0,
            facingAngle: 0,
            attackBlend: 0,
            defendBlend: 0,
            petalCount,
            loadout: savedLoadout
        };

        broadcastGameState();

        socket.on('playerUpdate', (data) => {
            const p = onlinePlayers[socket.id];
            if (!p) return;

            if (typeof data.worldX === 'number') p.worldX = data.worldX;
            if (typeof data.worldY === 'number') p.worldY = data.worldY;
            if (typeof data.currentDistance === 'number') p.currentDistance = data.currentDistance;
            if (typeof data.rotationAngle === 'number') p.rotationAngle = data.rotationAngle;
            if (typeof data.facingAngle === 'number') p.facingAngle = data.facingAngle;
            if (typeof data.attackBlend === 'number') p.attackBlend = data.attackBlend;
            if (typeof data.defendBlend === 'number') p.defendBlend = data.defendBlend;
            if (typeof data.petalCount === 'number') p.petalCount = data.petalCount;
            if (Array.isArray(data.loadout)) p.loadout = normalizeLoadout(data.loadout);

            socket.emit('movementCorrected', {
                worldX: p.worldX,
                worldY: p.worldY
            });
        });

        socket.on('disconnect', () => {
            const player = onlinePlayers[socket.id];
            if (player) {
                if (userToSocketId.get(player.username) === socket.id) {
                    userToSocketId.delete(player.username);
                }
            }

            delete onlinePlayers[socket.id];
            broadcastGameState();
        });
    } catch (err) {
        console.error('socket connection error:', err);
        socket.disconnect(true);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});