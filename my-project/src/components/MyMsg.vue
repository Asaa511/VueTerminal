<template>
  <div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="titleInput" class="col-sm-2 control-label">影名：</label>
              <div class="col-sm-10">
                <input class="form-control" id="titleInput" v-model="newMovie.title" placeholder="电影名称">
              </div>
            </div>
            <div class="form-group">
              <label for="msgInput" class="col-sm-2 control-label">见解：</label>
              <div class="col-sm-10">
                <textarea class="form-control" id="msgInput" v-model="newMovie.msg" placeholder="分享的你对这部电影的见解"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary" @click="sendData">发送</button>
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
    const socket = io('http://localhost:3000');

    socket.on('newMovie', (newMovie) => {
      this.movies.push(newMovie);
    });

    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
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

      axios
          .post('http://localhost:3000/addMovies', this.newMovie)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
};
</script>
