<template>
  <div id="app">
    <MyNavbar></MyNavbar>
    <router-view></router-view>
  </div>
</template>


<script>
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes/index';
import MyNavbar from './components/MyNavbar.vue';
import MyIndex from "@/components/MyIndex.vue";
import MyUser from "@/components/MyUser.vue";
import MyMovie from "@/components/MyMovie.vue";
import LogInUser from "@/components/LogInUser.vue";
import SignUpUser from "@/components/SignUpUser.vue";


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

export default {
  name: 'App',
  router,
  components: {
    MyNavbar,
    // eslint-disable-next-line vue/no-unused-components
    MyIndex,
    // eslint-disable-next-line vue/no-unused-components
    MyUser,
    // eslint-disable-next-line vue/no-unused-components
    MyMovie,
    // eslint-disable-next-line vue/no-unused-components
    LogInUser,
    // eslint-disable-next-line vue/no-unused-components
    SignUpUser,
  }
};
</script>

<style>

</style>