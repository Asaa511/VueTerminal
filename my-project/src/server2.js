/* eslint-env node */

// 导入所需的模块
const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require("socket.io");
const http = require("http").Server(app);

// 配置CORS选项
const corsOptions = {
    origin: '*', // 允许访问的源
};

// 使用CORS中间件
app.use(cors(corsOptions));

// 使用body-parser中间件解析请求主体
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 创建与MySQL数据库的连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'movie'
});

// 连接到MySQL数据库
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// 处理POST请求以添加电影
app.post('/addMovies', (req, res) => {
    const newMovie = req.body;

    // 将新电影插入到数据库中
    connection.query('INSERT INTO movies SET ?', newMovie, (err, results) => {
        if (err) {
            console.error('Error inserting movie:', err);
            res.status(500).send('Error inserting movie');
        } else {
            // 获取插入的电影的ID
            newMovie.id = results.insertId;
            // 使用Socket.io发送新电影的信息
            io.emit('newMovie', newMovie);
            res.send('ok');
        }
    });
});

// 处理GET请求以获取所有电影
app.get('/', (req, res) => {
    // 从数据库中查询所有电影
    connection.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error('Error querying movies:', err);
            res.status(500).send('Error querying movies');
        } else {
            console.log('Movies:', results);
            res.send(results);
        }
    });
});

// 启动服务器并监听端口3000
const server = http.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 创建Socket.io实例，并将其附加到服务器上
const io = socket(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});
