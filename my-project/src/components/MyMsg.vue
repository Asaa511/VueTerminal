<template>
  <div>
    <div class="mb-3">
      <input class="form-control" id="titleInput" v-model="newMovie.title" placeholder="电影名称">
    </div>
    <div class="mb-3">
      <input class="form-control" id="msgInput" v-model="newMovie.msg" placeholder="分享的你对这部电影的见解">
    </div>
    <button class="btn btn-primary" @click="sendData">发送</button>
    <ul class="list-group mt-3">
      <li v-for="movie in movies" :key="movie.id" class="list-group-item">
        {{ movie.id }} - {{ movie.title }} - {{ movie.msg }} - {{ movie.times }}
      </li>
    </ul>
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
