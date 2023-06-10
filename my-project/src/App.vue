<template>
  <div id="app">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Logo</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <router-link className="nav-link" to="/index">首页</router-link>
          </li>
          <li className="nav-item">
            <router-link className="nav-link" to="/course">课程</router-link>
          </li>
          <li className="nav-item">
            <router-link className="nav-link" to="/user">用户</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <hr>
    <div className="container">
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