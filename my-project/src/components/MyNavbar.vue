<template>
  <div class="a">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href=""><img alt="Logo" class="img" src="../image/logo.png"/></a>
      <button class="navbar-toggler" data-target="#navbarNav" data-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/movie">电影</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reviews">分享</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/LogInUser"></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SignUpUser"></router-link>
          </li>
        </ul>
      </div>
      <div>
        <template v-if="currentUser">
          <button class="btn btn-primary" @click="showDropdown = !showDropdown">{{ currentUser.username }}</button>
          <div v-if="showDropdown" class="dropdown-menu dropdown-menu-right position-fixed">
            <!-- 下拉框内容 -->
            <router-link class="dropdown-item" to="/SignUpUser">详细信息</router-link>
            <a class="dropdown-item" href="#" @click="logoutUser">退出登录</a>
          </div>
        </template>
        <template v-else>
          <router-link class="btn btn-primary" to="/login">登录</router-link>
        </template>
      </div>
    </nav>
  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "MyNavbar",
  data() {
    return {
      showDropdown: false,
    };
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['setCurrentUser']),
    logoutUser() {
      this.setCurrentUser(null); // 清除当前用户信息，将 currentUser 设置为 null
      // 执行其他与退出登录相关的逻辑
      // 重置其他状态等
    },
  },
}
</script>

<style scoped>

.img {
  width: 40px;
  height: 40px;
}

.dropdown-menu {
  display: block;
  left: 90px;
  right: 50px;
}
</style>
