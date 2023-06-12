<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="logo.png" alt="Logo" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/index">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movies">电影</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/reviews">分享</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-link class="btn btn-primary" to="/login">登录</router-link>
    </div>
  </nav>
</template>


<script>
export default {
  name: "MyNavbar"
}
</script>

<style scoped>

</style>