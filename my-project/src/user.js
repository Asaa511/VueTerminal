const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const http = require('http').Server(app);

const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'movie',
});

connection.connect((err) => {
    if (err) {
        console.error('连接失败', err);
    } else {
        console.log('连接成功');
    }
});

let currentUser = null; // 当前登录用户

app.post('/logUser', (req, res) => {
    const newUser = req.body;
    connection.query('INSERT INTO users SET ?', newUser, (err, results) => {
        if (err) {
            console.error('插入用户失败', err);
            res.status(500).send('插入用户失败');
        } else {
            newUser.id = results.insertId;
            io.emit('newUser', newUser);
            res.send('ok');
        }
    });
});

app.post('/signUser', (req, res) => {
    const { username, password } = req.body;

    // 在这里编写验证逻辑
    connection.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, results) => {
            if (err) {
                console.error('查询用户错误', err);
                res.status(500).send('查询用户错误');
            } else {
                if (results.length > 0) {
                    currentUser = results[0]; // 将当前登录用户存储在变量中
                    res.send('ok');
                } else {
                    // 验证失败，返回错误响应
                    res.status(401).send('无效的用户名或密码');
                }
            }
        }
    );
});

app.get('/user', (req, res) => {
    if (currentUser) {
        res.send(currentUser); // 返回当前登录用户的信息
    } else {
        res.status(404).send('用户未找到'); // 当前没有登录用户，返回 404 错误
    }
});


app.get('/', (req, res) => {
    // 从数据库中查询所有用户
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('查询用户错误', err);
            res.status(500).send('查询用户错误');
        } else {
            console.log('用户:', results);
            res.send(results);
        }
    });
});

const server = http.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
    },
});
