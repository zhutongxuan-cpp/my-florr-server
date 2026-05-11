const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 让 Express 托管 public 文件夹里的前端文件
app.use(express.static('public'));

// 存储所有在线玩家的数据
const players = {};

io.on('connection', (socket) => {
    console.log('新玩家加入游戏，ID:', socket.id);

    // 初始化玩家数据 (出生点坐标、速度、花瓣旋转角度)
    players[socket.id] = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        angle: 0 
    };

    // 接收玩家发来的鼠标偏移量
    socket.on('move', (data) => {
        let player = players[socket.id];
        if (player) {
            // 计算鼠标距离中心点的实际距离
            let dist = Math.hypot(data.dx, data.dy);
            
            // 设定最大速度限制 (你可以改这个数字调节手感)
            let MAX_SPEED = 6;       
            let speed = dist * 0.02; // 距离转化为速度的比例

            // 核心：如果速度超过最大值，强制锁定在最大速度
            if (speed > MAX_SPEED) {
                speed = MAX_SPEED;
            }

            // 把速度分解给 X 轴和 Y 轴
            if (dist > 0) {
                player.vx = (data.dx / dist) * speed;
                player.vy = (data.dy / dist) * speed;
            } else {
                player.vx = 0;
                player.vy = 0;
            }
        }
    });

    // 玩家断开连接时，清理数据
    socket.on('disconnect', () => {
        console.log('玩家离开，ID:', socket.id);
        delete players[socket.id];
    });
});

// 游戏主循环：每秒 60 次更新所有玩家状态并广播
setInterval(() => {
    for (let id in players) {
        let p = players[id];
        // 根据速度更新物理坐标
        p.x += p.vx;
        p.y += p.vy;
        // 花瓣自转
        p.angle += 0.05; 
    }
    // 把所有玩家的最新状态发给所有人
    io.emit('update', players);
}, 1000 / 60);

// Render 会提供 process.env.PORT，本地运行默认 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`游戏服务器已启动！监听端口: ${PORT}`);
});