const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ["GET", 'POST'],
  },
});

io.on('connection', (socket) => {
  //connect
  console.log('a user connected !');
  io.emit('welcome', 'Hello socket!');
  socket.on('hello', (arg) => console.log(arg))
})

const port = process.env.PORT || 6001;
http.listen(port, () => console.log(`Socket server started, port: ${port}`))