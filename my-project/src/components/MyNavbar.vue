<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="nav-link" to="/index"><a class="navbar-brand" href="#"><img alt="Logo" src="../image/logo.png" class="logo"/></a></router-link>
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
.logo{
  width: 60px;
  height: 60px;
}

</style>