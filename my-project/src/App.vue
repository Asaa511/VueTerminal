<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img alt="" src="./image/logo.png">
      </a>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/course">课程</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">用户</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <hr>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

export default {
  name: 'App',
  router
};
</script>

<style>

</style>