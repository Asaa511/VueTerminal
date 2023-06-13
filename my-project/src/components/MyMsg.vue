<template>
  <div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-sm-2 control-label" for="titleInput">影名：</label>
              <div class="col-sm-10">
                <input id="titleInput" v-model="newMovie.title" class="form-control" placeholder="电影名称">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label" for="msgInput">见解：</label>
              <div class="col-sm-10">
                <textarea id="msgInput" v-model="newMovie.msg" class="form-control"
                          placeholder="分享的你对这部电影的见解"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button class="btn btn-primary" type="submit" @click="sendData">发送</button>
              </div>
            </div>
          </form>

          <table class="table table-hover">
            <thead>
            <tr>
              <th>ID</th>
              <th>影名</th>
              <th>消息</th>
              <th>时间</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="movie in movies" :key="movie.id" class="table-success">
              <td>{{ movie.id }}</td>
              <td>{{ movie.title }}</td>
              <td>{{ movie.msg }}</td>
              <td>{{ movie.times }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import io from 'socket.io-client';

export default {
  data() {
    return {
      movies: [],
      newMovie: {
        title: '',
        msg: '',
      },
    };
  },
  created() {
    // 创建Socket.IO实例并连接到服务器
    const socket = io('http://localhost:3000');

    // 监听连接事件
    socket.on('connect', () => {
      console.log('Socket.IO connected');

      // 监听newMovie事件，接收新电影数据
      socket.on('newMovie', (newMovie) => {
        // 将新电影添加到movies数组
        this.movies.push(newMovie);
        console.log('Received new movie:', newMovie);
      });

      // 获取电影列表
      this.fetchMovies();
    });

    // 监听断开连接事件
    socket.on('disconnect', () => {
      console.log('Socket.IO disconnected');
    });
  },
  methods: {
    fetchMovies() {
      // 获取电影列表
      axios
          .get('http://localhost:3000')
          .then((response) => {
            this.movies = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    sendData() {
      if (!this.newMovie.title) {
        alert('请输入你要分享的电影名称');
        return;
      }

      if (!this.newMovie.msg) {
        alert('请输入你对这部电影的见解');
        return;
      }

      // 发送电影数据到服务器
      axios
          .post('http://localhost:3000/addMovies', this.newMovie)
          .then((response) => {
            console.log(response.data);

            // 重置文本框内容
            this.newMovie.title = '';
            this.newMovie.msg = '';
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
};
</script>
