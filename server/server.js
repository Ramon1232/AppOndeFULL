const express = require('express');
const cors = require('cors');
const { removeAllListeners } = require('process');
const app = express();
const server = require('http').Server(app);

app.use(cors());

const PORT = 3000;

const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
})

io.on('connection', (socket) => {

    socket.on('find-driver', ({points}) => {
        console.log('......', points);

        const counter = setInterval(() => {
            const coords = points.shift();
            if (!coords) {
                clearInterval(counter)
            } else {
                socket.emit('position', (coords));
            } 
        }, 200)
    })
})

server.listen(PORT, () => console.log('Todo bien !!'))
