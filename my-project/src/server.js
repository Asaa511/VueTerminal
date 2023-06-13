/* eslint-env node */

const express = require('express');
const bodyParser = require('body-parser');
// body-parser 用于解析请求体中的数据
const cors = require('cors');
const socket = require('socket.io');

// 创建 Express 应用程序
const app = express();

const corsOptions = {
  origin: '*', // 允许来自任何源的跨域请求
};


app.use(cors(corsOptions));
// cors 用于处理跨域请求 允许来自任何源的请求访问该服务器
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const movies = [
  { id: 1, title: '星际穿越', msg: '顶级配乐', times: '' },
  { id: 2, title: '寻梦环游记', msg: '爱超越死亡', times: '' },
];

// 添加中间件，用于解析请求体中的 JSON 数据
app.use(express.json());

// 获取电影数据的路由处理函数
app.get('/', (req, res) => {
  const id = req.query.id;
  if (id) {
    const movie = movies.find((movie) => movie.id === parseInt(id));
    res.send(movie);
  } else {
    res.send(movies);
  }
});

let movieId = 3; // 初始电影ID为3

// 添加电影数据的路由处理函数
app.post('/addMovies', (req, res) => {
    const newMovie = req.body;
    newMovie.id = movieId++; // 设置电影数据的id为当前movieId的值，并自增
    newMovie.times = new Date().toLocaleTimeString(); // 设置电影数据的时间

    movies.push(newMovie);  // 发送新的电影数据给客户端
    io.emit('newMovie', newMovie);

    res.send('ok');
});

// 启动服务器
const server = app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.2:3000');
});

// 创建Socket.io实例，并将其附加到服务器上
const io = socket(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
});

