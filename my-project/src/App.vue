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
import  BxJg from "@/components/movie/BxJg.vue";
import CmDsj from "@/components/movie/CmDsj.vue";
import JsZs from "@/components/movie/JsZs.vue";
import SdyJq from "@/components/movie/SdyJq.vue";
import SsDtl from "@/components/movie/SsDtl.vue";
import XJ from "@/components/movie/XJ.vue";
import XmHyj from "@/components/movie/XmHyj.vue";
import AgZz from "@/components/movie/AgZz.vue";

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
     // eslint-disable-next-line vue/no-unused-components
    BxJg,
      // eslint-disable-next-line vue/no-unused-components
    CmDsj,
      // eslint-disable-next-line vue/no-unused-components
    JsZs,
      // eslint-disable-next-line vue/no-unused-components
    SdyJq,
      // eslint-disable-next-line vue/no-unused-components
    SsDtl,
      // eslint-disable-next-line vue/no-unused-components
      XJ,
      // eslint-disable-next-line vue/no-unused-components
      XmHyj,
      // eslint-disable-next-line vue/no-unused-components
      AgZz,
      // eslint-disable-next-line vue/no-unused-components
  }
};
</script>

<style>

</style>