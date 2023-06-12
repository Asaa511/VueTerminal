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


Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

export default {
  name: 'App',
  router,
  components: {
    MyNavbar,
    // eslint-disable-next-line vue/no-unused-components
    MyIndex,
    // eslint-disable-next-line vue/no-unused-components
    MyUser
  }
};
</script>

<style>

</style>

<!--jjkj-->