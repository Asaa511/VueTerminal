<template>
  <div>
    <div class="search-bar text-center">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <input type="text" class="form-control" v-model="searchQuery" placeholder="搜索电影" maxlength="50">
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary btn-block" @click="searchMovies">搜索</button>
          &nbsp;&nbsp;
          <button class="btn btn-primary btn-block" @click="goToAddMovie">添加</button>
        </div>
        <transition name="slide-down">
          <div v-if="isAddMoviesVisible">
            <AddMovies @movieSubmitted="addMovie"></AddMovies>
          </div>
        </transition>
      </div>
    </div>
    <div class="movie-list">
      <div v-for="movie in filteredMovies" :key="movie.id" class="movie-item" @click="goToMovie(movie.id)">
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
import AddMovies from "@/components/AddMovies.vue";

export default {
  data() {
    return {
      isAddMoviesVisible: false,
      searchQuery: '',
      movies: [
        { id: 1, title: '星际穿越', image: require('../image/interstellar.jpg')},
        { id: 2, title: '变形金刚', image: require('../image/bxjg.jpg')},
        { id: 3, title: '寻梦环游记', image: require('../image/xmhyj.jpg')},
        { id: 4, title: '楚门的世界', image: require('../image/cmdsj.jpg') },
        { id: 5, title: '疾速追杀', image: require('../image/jszs.jpg') },
        { id: 6, title: '速度与激情10', image: require('../image/sdyjq10.jpg') },
        { id: 7, title: '杀手不太冷', image: require('../image/ssbtl.jpg') },
        { id: 8, title: '阿甘正传', image: require('../image/agzz.jpg') },
      ],
    };
  },
  computed: {
    filteredMovies() {
      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        return this.movies.filter(movie => movie.title.toLowerCase().includes(query));
      }
      return this.movies;
    },
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
    goToAddMovie() {
      // 处理显示添加界面的逻辑
      this.isAddMoviesVisible = true;
    },
    addMovie(newMovie) {
      this.movies.push(newMovie);
      this.isAddMoviesVisible = false; // 添加完成后隐藏添加界面
    },
  },
  components: {
    AddMovies,
  },
};
</script>






<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(5, 140px);
  grid-template-rows: repeat(1, 250px);
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
  width: 140px;
  height: 200px;
}

.movie-item p {
  margin-top: 10px;
}

.no-results {
  animation: fade-in 0.5s ease;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



</style>
