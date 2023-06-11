const express = require('express');

// 创建 Express 应用程序
const app = express();

// 假设电影数据存储在 movies 数组中
const movies = [
    { id: 1, title: '电影1' ,image: ''},
    { id: 2, title: '电影2' ,image: ''},
    // 其他电影数据...
];

// 添加中间件，用于解析请求体中的 JSON 数据
app.use(express.json());

// 定义获取电影数据的路由
app.get('/', (req, res) => {
    const id = req.query.id;
    if (id){
        res.send(movies[id])
    } else {
        res.send(movies)
    }
});

// 定义添加电影数据的路由
app.post('/addMovies',(req, res) =>{
    const newMovie = req.body;
    movies.push(newMovie);
    res.send("ok");
});

// 启动服务器
app.listen(3000, () => {
    console.log('Server is running on http://127.0.0.2:3000');
});
