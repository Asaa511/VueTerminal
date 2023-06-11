<template>
  <div>
    <!-- 操作菜单 -->
    <div class="menu">
      <!-- 图片导入按钮 -->
      <input type="file" class="form-control-file" @change="handleImageUpload" accept="image/*">
      <!-- 缩略图显示 -->
      <div v-if="thumbnail">
        <img :src="thumbnail" class="thumbnail" alt="Thumbnail">
      </div>
    </div>

    <!-- 电影名称输入框 -->
    <input type="text" class="form-control" v-model="movieName" placeholder="电影名称">

    <!-- 电影简介输入框 -->
    <textarea class="form-control" v-model="movieDescription" placeholder="电影简介"></textarea>

    <!-- 提交按钮 -->
    <button class="btn btn-primary" @click="submitMovie">提交</button>
  </div>
</template>

<script>
export default {
  name: 'AddMovies',
  data() {
    return {
      movieName: '',
      movieDescription: '',
      thumbnail: null,
    };
  },
  methods: {
    handleImageUpload(event) {
      // 处理图片上传逻辑，更新缩略图
      const file = event.target.files[0];
      this.thumbnail = URL.createObjectURL(file);
    },
    submitMovie() {
      // 处理电影提交逻辑
      // 可以在这里将电影名称、简介和缩略图数据发送到服务器
    },
  },
};
</script>

<style scoped>
.menu {
  margin-bottom: 20px;
}
.thumbnail {
  width: 200px;
  height: auto;
  margin-top: 10px;
}
.add-movies {
  /* 添加样式以实现过渡效果 */
  transition: all 0.3s;
}
</style>
