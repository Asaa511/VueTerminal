<template>
  <div>
    <p>2</p>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{movie.id}} - {{ movie.title }} - {{ movie.msg }} - {{movie.times}}
      </li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import io from 'socket.io-client';

export default {
  data() {
    return {
      movies: [],
    };
  },
  created() {
    // 创建Socket.io连接
    const socket = io('http://localhost:3000');

    // 监听服务器发送的新电影数据
    socket.on('newMovie', (newMovie) => {
      this.movies.push(newMovie);
    });

    // 请求初始化电影数据
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      // 发起HTTP GET请求获取电影数据
      axios
          .get('http://localhost:3000')
          .then((response) => {
            this.movies = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
};
</script>
