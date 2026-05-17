const express = require('express');
const http = require('http');
const session = require('express-session');
const SQLiteStoreFactory = require('connect-sqlite3');
const { Server } = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const SQLiteStore = SQLiteStoreFactory(session);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const players = {};
const activeUserSockets = new Map(); // username -> socket.id

// ================= 数据库 =================
const db = new sqlite3.Database('./users.db');
const sessionsDb = new sqlite3.Database('./sessions.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        )
    `);
});

// ================= 中间件 =================
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const sessionStore = new SQLiteStore({
    db: 'sessions.db',
    dir: './',
    table: 'sessions',
    concurrentDB: true
});

const isProduction = process.env.NODE_ENV === 'production';

const sessionMiddleware = session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET || 'my-florr-super-secret-key',
    name: 'florr.sid',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: isProduction,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
});

app.use(sessionMiddleware);

io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
});

// ================= 游戏参数 / 反作弊参数 =================
const GAME_CONFIG = {
    normalDistance: 45,
    attackDistance: 90,
    defendDistance: 36,
    maxMoveSpeed: 6,
    maxMoveDtMs: 120,
    graceExtraDistance: 4,
    minUpdateIntervalMs: 8,
    maxWorldCoordAbs: 1000000,
    maxRotationSpeedPerSec: 8,
    maxFacingJumpPerUpdate: Math.PI,
    blendMin: 0,
    blendMax: 1
};

// ================= 工具函数 =================
function isValidUsername(username) {
    return /^[A-Za-z0-9_\u4e00-\u9fa5]{3,15}$/.test(username);
}

function isValidPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/.test(password);
}

function publicUserData(player) {
    return {
        username: player.username,
        worldX: player.worldX,
        worldY: player.worldY,
        currentDistance: player.currentDistance,
        rotationAngle: player.rotationAngle,
        facingAngle: player.facingAngle,
        attackBlend: player.attackBlend,
        defendBlend: player.defendBlend,
        petalCount: player.petalCount
    };
}

function cleanupExpiredSessions() {
    sessionsDb.run(
        'DELETE FROM sessions WHERE expired < ?',
        [Date.now()],
        (err) => {
            if (err && !String(err.message || '').includes('no such table')) {
                console.error('清理过期 session 失败:', err);
            }
        }
    );
}

function destroySessionBySid(sid) {
    return new Promise((resolve) => {
        sessionStore.destroy(sid, (err) => {
            if (err) {
                console.error(`销毁 session 失败 sid=${sid}:`, err);
            }
            resolve();
        });
    });
}

function getAllSessions() {
    return new Promise((resolve) => {
        sessionStore.all((err, sessions) => {
            if (err) {
                console.error('读取全部 sessions 失败:', err);
                return resolve({});
            }
            resolve(sessions || {});
        });
    });
}

async function destroyOtherSessionsOfUsername(username, keepSid) {
    const sessions = await getAllSessions();
    const tasks = [];

    for (const sid of Object.keys(sessions)) {
        const sess = sessions[sid];
        const sessUsername = sess?.user?.username;

        if (sessUsername === username && sid !== keepSid) {
            tasks.push(destroySessionBySid(sid));
        }
    }

    await Promise.all(tasks);
}

function kickUserSocket(username, message = '你的账号已在其他地方登录', exceptSocketId = null) {
    const socketId = activeUserSockets.get(username);
    if (!socketId) return;

    if (exceptSocketId && socketId === exceptSocketId) return;

    const oldSocket = io.sockets.sockets.get(socketId);
    if (!oldSocket) {
        activeUserSockets.delete(username);
        delete players[socketId];
        return;
    }

    oldSocket.emit('sessionReplaced', { message });

    delete players[socketId];
    activeUserSockets.delete(username);

    oldSocket.disconnect(true);
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function safeNumber(value, fallback = 0) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
}

function normalizeAngle(angle) {
    let a = angle;
    while (a > Math.PI) a -= Math.PI * 2;
    while (a < -Math.PI) a += Math.PI * 2;
    return a;
}

function clampAngleChange(current, target, maxDelta) {
    const diff = normalizeAngle(target - current);
    const limited = clamp(diff, -maxDelta, maxDelta);
    return normalizeAngle(current + limited);
}

function resetPlayerOfSocket(socketId, username) {
    players[socketId] = {
        username,
        worldX: 0,
        worldY: 0,
        currentDistance: GAME_CONFIG.normalDistance,
        rotationAngle: 0,
        facingAngle: 0,
        attackBlend: 0,
        defendBlend: 0,
        petalCount: 5,
        lastUpdateAt: Date.now()
    };
}

function applyMovementAntiCheat(player, data, socket) {
    const now = Date.now();
    const elapsedRaw = now - (player.lastUpdateAt || now);
    const elapsed = clamp(elapsedRaw, GAME_CONFIG.minUpdateIntervalMs, GAME_CONFIG.maxMoveDtMs);
    player.lastUpdateAt = now;

    const incomingX = safeNumber(data.worldX, player.worldX);
    const incomingY = safeNumber(data.worldY, player.worldY);

    const safeTargetX = clamp(incomingX, -GAME_CONFIG.maxWorldCoordAbs, GAME_CONFIG.maxWorldCoordAbs);
    const safeTargetY = clamp(incomingY, -GAME_CONFIG.maxWorldCoordAbs, GAME_CONFIG.maxWorldCoordAbs);

    const dx = safeTargetX - player.worldX;
    const dy = safeTargetY - player.worldY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxAllowedDistance =
        GAME_CONFIG.maxMoveSpeed * (elapsed / 16.6667) + GAME_CONFIG.graceExtraDistance;

    if (distance <= maxAllowedDistance || distance === 0) {
        player.worldX = safeTargetX;
        player.worldY = safeTargetY;
    } else {
        const ratio = maxAllowedDistance / distance;
        player.worldX += dx * ratio;
        player.worldY += dy * ratio;

        socket.emit('movementCorrected', {
            worldX: player.worldX,
            worldY: player.worldY
        });
    }

    const incomingCurrentDistance = safeNumber(data.currentDistance, player.currentDistance);
    player.currentDistance = clamp(
        incomingCurrentDistance,
        GAME_CONFIG.defendDistance,
        GAME_CONFIG.attackDistance
    );

    const incomingRotation = safeNumber(data.rotationAngle, player.rotationAngle);
    const maxRotationDelta = GAME_CONFIG.maxRotationSpeedPerSec * (elapsed / 1000);
    player.rotationAngle = clampAngleChange(player.rotationAngle, incomingRotation, maxRotationDelta);

    const incomingFacing = safeNumber(data.facingAngle, player.facingAngle);
    player.facingAngle = clampAngleChange(
        player.facingAngle,
        incomingFacing,
        GAME_CONFIG.maxFacingJumpPerUpdate
    );

    player.attackBlend = clamp(
        safeNumber(data.attackBlend, player.attackBlend),
        GAME_CONFIG.blendMin,
        GAME_CONFIG.blendMax
    );

    player.defendBlend = clamp(
        safeNumber(data.defendBlend, player.defendBlend),
        GAME_CONFIG.blendMin,
        GAME_CONFIG.blendMax
    );
}

// 定时清理过期 session
cleanupExpiredSessions();
setInterval(cleanupExpiredSessions, 1000 * 60 * 30);

// ================= 账号接口 =================

// 注册
app.post('/api/register', (req, res) => {
    const username = String(req.body?.username || '').trim();
    const password = String(req.body?.password || '').trim();

    if (!isValidUsername(username)) {
        return res.json({
            success: false,
            message: '用户名需为3-15位，只能包含中文、字母、数字、下划线'
        });
    }

    if (!isValidPassword(password)) {
        return res.json({
            success: false,
            message: '密码需为5-15位，且必须包含字母和数字'
        });
    }

    db.get('SELECT id FROM users WHERE username = ?', [username], async (err, row) => {
        if (err) {
            console.error('查询用户失败:', err);
            return res.json({ success: false, message: '服务器错误' });
        }

        if (row) {
            return res.json({ success: false, message: '已有该用户名' });
        }

        try {
            const passwordHash = await bcrypt.hash(password, 10);

            db.run(
                'INSERT INTO users (username, password_hash) VALUES (?, ?)',
                [username, passwordHash],
                function(insertErr) {
                    if (insertErr) {
                        console.error('注册失败:', insertErr);
                        return res.json({ success: false, message: '注册失败，请稍后重试' });
                    }

                    return res.json({
                        success: true,
                        message: '注册成功，请登录'
                    });
                }
            );
        } catch (e) {
            console.error('密码加密失败:', e);
            return res.json({ success: false, message: '服务器错误' });
        }
    });
});

// 登录
app.post('/api/login', (req, res) => {
    const username = String(req.body?.username || '').trim();
    const password = String(req.body?.password || '').trim();

    if (!username || !password) {
        return res.json({ success: false, message: '用户名和密码不能为空' });
    }

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
        if (err) {
            console.error('登录查询失败:', err);
            return res.json({ success: false, message: '服务器错误' });
        }

        if (!row) {
            return res.json({ success: false, message: '无此账号，请先注册' });
        }

        try {
            const ok = await bcrypt.compare(password, row.password_hash);

            if (!ok) {
                return res.json({ success: false, message: '密码错误' });
            }

            req.session.user = {
                id: row.id,
                username: row.username
            };
            req.session.loginAt = Date.now();

            req.session.save(async (saveErr) => {
                if (saveErr) {
                    console.error('Session 保存失败:', saveErr);
                    return res.json({ success: false, message: '登录失败，请稍后重试' });
                }

                await destroyOtherSessionsOfUsername(row.username, req.sessionID);
                kickUserSocket(row.username, '你的账号已在其他地方登录');

                return res.json({
                    success: true,
                    message: '登录成功',
                    username: row.username
                });
            });
        } catch (e) {
            console.error('密码校验失败:', e);
            return res.json({ success: false, message: '服务器错误' });
        }
    });
});

// 当前登录状态
app.get('/api/me', (req, res) => {
    if (!req.session.user) {
        return res.json({
            success: false,
            loggedIn: false
        });
    }

    return res.json({
        success: true,
        loggedIn: true,
        username: req.session.user.username
    });
});

// 退出登录
app.post('/api/logout', (req, res) => {
    const username = req.session?.user?.username || null;

    if (username) {
        kickUserSocket(username, '你已退出登录');
    }

    req.session.destroy((err) => {
        if (err) {
            console.error('退出登录失败:', err);
            return res.json({ success: false, message: '退出登录失败' });
        }

        res.clearCookie('florr.sid');
        return res.json({ success: true, message: '已退出登录' });
    });
});

// ================= 游戏逻辑 =================
io.on('connection', (socket) => {
    const sessionData = socket.request.session;
    const sessionUser = sessionData?.user;
    const username = sessionUser?.username;

    if (!username) {
        console.log(`⛔ 未登录 socket 连接已拒绝: ${socket.id}`);
        socket.disconnect(true);
        return;
    }

    const existingSocketId = activeUserSockets.get(username);

    if (existingSocketId && existingSocketId !== socket.id) {
        delete players[existingSocketId];

        const oldSocket = io.sockets.sockets.get(existingSocketId);
        if (oldSocket) {
            oldSocket.emit('sessionReplaced', {
                message: '你的账号已在其他地方重新连接'
            });
            oldSocket.disconnect(true);
        }

        activeUserSockets.delete(username);
    }

    activeUserSockets.set(username, socket.id);
    socket.data.username = username;

    console.log(`🌸 玩家加入: ${socket.id}, 用户名: ${username}`);

    resetPlayerOfSocket(socket.id, username);

    socket.emit('movementCorrected', {
        worldX: players[socket.id].worldX,
        worldY: players[socket.id].worldY
    });

    socket.on('playerUpdate', (data) => {
        const p = players[socket.id];
        if (!p || typeof data !== 'object' || !data) return;

        applyMovementAntiCheat(p, data, socket);
    });

    socket.on('disconnect', (reason) => {
        console.log(`🥀 玩家离开: ${socket.id}, reason: ${reason}`);

        delete players[socket.id];

        if (activeUserSockets.get(username) === socket.id) {
            activeUserSockets.delete(username);
        }
    });
});

// 广播游戏状态
setInterval(() => {
    const sanitizedPlayers = {};
    for (const id in players) {
        sanitizedPlayers[id] = publicUserData(players[id]);
    }
    io.emit('gameState', sanitizedPlayers);
}, 1000 / 60);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`游戏服务器已启动！监听端口: ${PORT}`);
    console.log(`访问地址: http://localhost:${PORT}`);
});