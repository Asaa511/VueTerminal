<template>
  <div>
    <!-- 操作菜单 -->
    <div class="menu">
      <!-- 图片导入按钮 -->
      <input accept="image/*" class="file-input" type="file" @change="handleImageUpload">
      <!-- 缩略图显示 -->
      <div v-if="thumbnail">
        <img :src="thumbnail" alt="Thumbnail" class="thumbnail">
      </div>
    </div>
    <!-- 电影名称输入框 -->
    <input v-model="movieName" class="movie-input" placeholder="电影名称" type="text">
    <!-- 提交按钮 -->
    <button class="submit-btn" @click="submitMovie">提交</button>
    <!-- 提示消息 -->
    <div v-if="!isFormValid" class="error-msg">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnail: '',
      movieName: '',
      isFormValid: true,
      errorMessage: ''
    };
  },
  methods: {
    handleImageUpload(event) {
      // 从文件输入中获取图片文件
      const file = event.target.files[0];
      if (file) {
        // 生成缩略图
        const reader = new FileReader();
        reader.onload = () => {
          this.thumbnail = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.thumbnail = '';
      }
    },
    submitMovie() {
      // 检查表单是否有效
      this.isFormValid = true;
      this.errorMessage = '';
      if (!this.thumbnail) {
        this.isFormValid = false;
        this.errorMessage = '请导入图片文件';
      } else if (this.movieName.trim() === '') {
        this.isFormValid = false;
        this.errorMessage = '请输入电影名称';
      }

      if (this.isFormValid) {
        // 创建新电影对象
        const newMovie = {
          id: Date.now(), // 使用当前时间戳作为唯一 ID
          title: this.movieName,
          image: this.thumbnail,
        };

        // 触发事件并传递新电影对象给父组件
        this.$emit('movieSubmitted', newMovie);

        // 清空表单数据
        this.movieName = '';
        this.thumbnail = '';
      }
    }
  }
};
</script>

<style scoped>
.menu {
  margin-bottom: 20px;
}

.file-input {
  padding: 8px;
  border: none;
  background-color: #f2f2f2;
  color: #333;
  cursor: pointer;
}

.thumbnail {
  width: 200px;
  height: auto;
  margin-top: 10px;
}

.movie-input {
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
