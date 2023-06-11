<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>


<script>
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes/index';
import Navbar from './components/MyNavbar.vue';
import MyIndex from "@/components/MyIndex.vue";


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

export default {
  name: 'App',
  router,
  components: {
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    MyIndex,
  }
};
</script>

<style>

</style>