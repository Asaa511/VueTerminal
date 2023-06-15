/* eslint-env node */

const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const http = require('http').Server(app);

const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'movie',
});

connection.connect((err) => {
    if (err) {
        console.error('连接到MySQL数据库出错:', err);
    } else {
        console.log('已连接到MySQL数据库');
    }
});

app.post('/addMovies', (req, res) => {
    const newMovie = req.body;

    connection.query('INSERT INTO movies SET ?', newMovie, (err, results) => {
        if (err) {
            console.error('插入电影出错:', err);
            res.status(500).send('插入电影出错');
        } else {
            newMovie.id = results.insertId;
            io.emit('newMovie', newMovie);
            res.send('ok');
        }
    });
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error('查询电影出错:', err);
            res.status(500).send('查询电影出错');
        } else {
            console.log('电影:', results);
            res.send(results);
        }
    });
});

const server = http.listen(4000, () => {
    console.log('服务器运行在 http://localhost:4000');
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
    },
});