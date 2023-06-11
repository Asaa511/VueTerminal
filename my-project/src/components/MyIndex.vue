<template>
  <div>
    <div class="search-bar text-center">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <input type="text" class="form-control" v-model="searchQuery" placeholder="搜索电影" maxlength="50">
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary btn-block" @click="searchMovies">搜索</button>
        </div>
      </div>
    </div>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-item" @click="goToMovie(movie.id)">
        <img :src="movie.image" :alt="movie.title" class="movie-image">
        <p>{{ movie.title }}</p>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      movies: [
        { id: 1, title: '星际穿越', image: require('../image/interstellar.jpg')},
        { id: 2, title: '变形金刚', image: require('../image/bxjg.jpg')},
        { id: 3, title: '寻梦环游记', image: require('../image/xmhyj.jpg')},
        { id: 4, title: '楚门的世界', image: require('../image/cmdsj.jpg') },
        { id: 5, title: '疾速追杀', image: require('../image/jszs.jpg') },
        { id: 6, title: '速度与激情10', image: require('../image/sdyjq10.jpg') },
        { id: 7, title: '杀手不太冷', image: require('../image/ssbtl.jpg') },
      ],
    };
  },
  methods: {
    searchMovies() {
      // 处理搜索逻辑
    },
    goToMovie(movieId) {
      // 处理跳转到电影详情界面的逻辑
      // 可以使用路由进行页面跳转，或者使用其他导航方式
      console.log(movieId); // 这里使用了 movieId 变量
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(5, 115px);
  grid-template-rows: repeat(1, 210px);
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
}

.movie-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.movie-image {
  width: 115px;
  height: 161px;
}

.movie-item p {
  margin-top: 10px;
}
</style>
