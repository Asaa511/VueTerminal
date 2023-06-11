<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/index">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movies">电影</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/reviews">影评</router-link>
        </li>
      </ul>
    </div>
    <div class="ml-auto">
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