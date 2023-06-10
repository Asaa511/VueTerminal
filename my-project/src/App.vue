<template>
  <div id="app">
    <div>
      <router-link to="/index">首页</router-link>
      <router-link to="/course">课程</router-link>
      <router-link to="/user">用户</router-link>
    </div>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VurRouter from 'vr-router'
import MyIndex from './components/MyIndex.vue'
import MyCourse from './components/MyCourse.vue'
import MyUser from './components/MyUser.vue'
Vue.use(VurRouter)
const router = new VueRouter({
  routes:[
  {
    path:'/index',
    component:MyIndex
  },
  {
    path:'/course',
    component:MyCourse
  },
  {
    path:'/user',
    component:MyUser
  }, 
 ]
})
export default {
  name: 'App',
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
