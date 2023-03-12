require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const multer = require('multer');
const jwt = require('jsonwebtoken');
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
const cors = require('cors');
app.use(cors());
app.post(multer().none(), async (req, res, next) => {
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const data = {
  account: 'root',
  password: 'root',
  name: 'User1',
  sid: 1,
};

app.post('/login', (req, res) => {
  const output = {
    success: false,
    error: '',
    postData: req.body,
    auth: {},
  };
  const { account, password } = req.body;
  if (account === data.account && password === data.password) {
    output.success = true;
    output.auth = {
      name: data.name,
      token: jwt.sign(
        { name: data.name, sid: data.sid },
        process.env.JWT_SECRET
      ),
    };
  } else {
    output.success = false;
    output.error = '帳號或密碼錯誤';
  }
  res.json(output);
});

io.on('connection', (socket) => {
  //connect
  console.log('a user connected !');
  io.emit('welcome', 'Hello socket!');
  socket.on('hello', (arg) => console.log(arg));
  socket.on('sendMessage', () => {});
});
io.on('disconnect', () => console.log('user disconnect!'));

const port = process.env.PORT || 6001;
http.listen(port, () => console.log(`Socket server started, port: ${port}`));
