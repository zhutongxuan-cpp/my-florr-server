const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// 1. 连接 MongoDB Atlas 云数据库
const mongoUri = process.env.MONGO_URI || "这里可以临时填你的数据库链接测试用，传到Render后记得删掉！"; 
mongoose.connect(mongoUri).then(() => {
    console.log("云端数据库连接成功！");
}).catch(err => console.log("数据库连接失败", err));

// 2. 重新定义数据库格式 (增加密码和坐标)
const playerSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // 账号唯一
    password: { type: String },               // 密码 (警告：这里为了简单用明文，千万别让同学填真实常用密码)
    x: { type: Number, default: 400 },        // 上次下线时的 X 坐标
    y: { type: Number, default: 300 }         // 上次下线时的 Y 坐标
});
const Player = mongoose.model('Player', playerSchema);

// 3. 服务器内存：记录当前在线的玩家
const players = {}; 

io.on('connection', (socket) => {
    console.log('玩家建立连接: ' + socket.id);

    // 【登录逻辑】
    socket.on('login', async (data) => {
        const { username, password } = data;
        let user = await Player.findOne({ username: username });
        
        if (user) {
            // 账号存在，检查密码
            if (user.password === password) {
                joinGame(socket, user);
            } else {
                socket.emit('loginError', '密码错误！');
            }
        } else {
            socket.emit('loginError', '账号不存在，请先注册！');
        }
    });

    // 【注册逻辑】
    socket.on('register', async (data) => {
        const { username, password } = data;
        if(username.length < 2 || password.length < 2) return socket.emit('loginError', '账号密码太短！');

        let user = await Player.findOne({ username: username });
        if (user) {
            socket.emit('loginError', '账号已被注册啦！');
        } else {
            // 创建新号
            user = new Player({ username, password });
            await user.save();
            joinGame(socket, user);
        }
    });

    // 【把玩家加入游戏世界】
    function joinGame(socket, user) {
        // 告诉玩家登录成功，并把他的坐标发给他
        socket.emit('loginSuccess', { x: user.x, y: user.y, username: user.username });
        
        // 把他加入在线列表
        players[socket.id] = {
            username: user.username,
            x: user.x,
            y: user.y
        };
        console.log(`${user.username} 进入了游戏`);
    }

    // 【接收玩家移动并更新】
    socket.on('move', (coords) => {
        if (players[socket.id]) {
            players[socket.id].x = coords.x;
            players[socket.id].y = coords.y;
        }
    });

    // 【玩家关闭网页下线】
    socket.on('disconnect', async () => {
        if (players[socket.id]) {
            const userToSave = players[socket.id];
            console.log(`${userToSave.username} 下线了，正在保存进度...`);
            // 把最后的坐标保存到数据库
            await Player.updateOne({ username: userToSave.username }, { x: userToSave.x, y: userToSave.y });
            // 从在线列表中删除
            delete players[socket.id];
        }
    });
});

// 4. 【游戏核心心跳】：每秒向所有人发送 30 次当前所有玩家的位置
setInterval(() => {
    io.emit('stateUpdate', players);
}, 1000 / 30); 

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`游戏服务器已启动！端口：${PORT}`);
});