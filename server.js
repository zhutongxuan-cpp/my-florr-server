const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const players = {};

io.on('connection', (socket) => {
    console.log(`🌸 玩家加入: ${socket.id}`);

    // 初始化新玩家的默认数据（增加了 state 和 facingAngle）
    players[socket.id] = {
        worldX: 0,
        worldY: 0,
        currentDistance: 45,
        rotationAngle: 0,
        facingAngle: 0,      // 视线朝向角度
        state: 'normal',     // 默认表情状态
        petalCount: 5
    };

    // 接收客户端发来的最新状态
    socket.on('playerUpdate', (data) => {
        if (players[socket.id]) {
            players[socket.id].worldX = data.worldX;
            players[socket.id].worldY = data.worldY;
            players[socket.id].currentDistance = data.currentDistance;
            players[socket.id].rotationAngle = data.rotationAngle;
            players[socket.id].facingAngle = data.facingAngle; // 更新视线
            players[socket.id].state = data.state;             // 更新表情
        }
    });

    socket.on('disconnect', () => {
        console.log(`🥀 玩家离开: ${socket.id}`);
        delete players[socket.id];
    });
});

setInterval(() => {
    io.emit('gameState', players);
}, 1000 / 60);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`游戏服务器已启动！监听端口: ${PORT}`);
});