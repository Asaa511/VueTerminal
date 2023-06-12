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
import MyUser from "@/components/MyUser.vue";
import MyMovie from "@/components/MyMovie.vue";


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
    // eslint-disable-next-line vue/no-unused-components
    MyUser,
    // eslint-disable-next-line vue/no-unused-components
    MyMovie,
  }
};
</script>

<style>

</style>

<!--jjkj-->