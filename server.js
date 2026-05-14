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

    // 初始化新玩家的默认数据（将 state 替换为平滑渐变值）
    players[socket.id] = {
        worldX: 0,
        worldY: 0,
        currentDistance: 45,
        rotationAngle: 0,
        facingAngle: 0,      // 视线朝向角度
        attackBlend: 0,      // 新增：攻击渐变值
        defendBlend: 0,      // 新增：防御渐变值
        petalCount: 5
    };

    // 接收客户端发来的最新状态
    socket.on('playerUpdate', (data) => {
        if (players[socket.id]) {
            players[socket.id].worldX = data.worldX;
            players[socket.id].worldY = data.worldY;
            players[socket.id].currentDistance = data.currentDistance;
            players[socket.id].rotationAngle = data.rotationAngle;
            
            // 同步白点朝向和渐变表情
            players[socket.id].facingAngle = data.facingAngle; 
            players[socket.id].attackBlend = data.attackBlend; 
            players[socket.id].defendBlend = data.defendBlend; 
        }
    });

    socket.on('disconnect', () => {
        console.log(`🥀 玩家离开: ${socket.id}`);
        delete players[socket.id];
    });
});

// 以 60 FPS 向所有玩家广播最新状态
setInterval(() => {
    io.emit('gameState', players);
}, 1000 / 60);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`游戏服务器已启动！监听端口: ${PORT}`);
});