const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 让 Express 托管 public 文件夹里的静态文件 (index.html)
app.use(express.static('public'));

// 存储全服所有玩家的数据
const players = {};

io.on('connection', (socket) => {
    console.log(`🌸 玩家加入: ${socket.id}`);

    // 初始化新玩家的默认数据
    players[socket.id] = {
        worldX: 0,
        worldY: 0,
        currentDistance: 45,
        rotationAngle: 0,
        petalCount: 5
    };

    // 监听客户端发来的最新状态
    socket.on('playerUpdate', (data) => {
        if (players[socket.id]) {
            players[socket.id].worldX = data.worldX;
            players[socket.id].worldY = data.worldY;
            players[socket.id].currentDistance = data.currentDistance;
            players[socket.id].rotationAngle = data.rotationAngle;
        }
    });

    // 玩家断开连接时，从对象中删除
    socket.on('disconnect', () => {
        console.log(`🥀 玩家离开: ${socket.id}`);
        delete players[socket.id];
    });
});

// 🚀 核心：以 60Hz (约 16.6ms) 的频率将所有玩家状态广播给全服
setInterval(() => {
    io.emit('gameState', players);
}, 1000 / 60);

// Render 会提供 process.env.PORT，如果本地运行则使用 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`游戏服务器已启动！监听端口: ${PORT}`);
});