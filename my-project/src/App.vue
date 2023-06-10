<template>
  <div id="app">
    <router-view></router-view>
    <bar>
      <baritem v-for="item in datalist" :path="item.path" :color="item.color" :key="item.path">
        <img slot="icon" :src="item.image" alt="">
        <img slot="icon-active" :src="item.image_active" alt="">
        <span  slot="text">{{item.text}}</span>
      </baritem>
    </bar>
  </div>
</template>

<script>
import bar from './components/bar.vue';
import baritem from './components/baritem.vue'
export default {
  name: 'app',
  components:{
    bar,
    baritem
  },
  data(){
    return {
      datalist:[
        {
          path:'/home',
          color:'red',
          image:require('./assets/img/tabbar/首页.png'),
          image_active:require('./assets/img/tabbar/首页_active.png'),
          text:'首页'
        },
        {
          path:'/type',
          color:'red',
          image:require('./assets/img/tabbar/分类.png'),
          image_active:require('./assets/img/tabbar/分类_active.png'),
          text:'分类'
        },
        {
          path:'/cart',
          color:'red',
          image:require('./assets/img/tabbar/购物车.png'),
          image_active:require('./assets/img/tabbar/购物车_active.png'),
          text:'购物车'
        },
        {
          path:'/profile',
          color:'red',
          image:require('./assets/img/tabbar/我 的.png'),
          image_active:require('./assets/img/tabbar/我的_active.png'),
          text:'我的'
        }

      ]
    }

  }
}
</script>