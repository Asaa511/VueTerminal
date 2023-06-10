import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//首页
const home = ()=>import('../views/home/home.vue');
//分类
const type = ()=>import('../views/type/type.vue');
//购物车
const cart = ()=>import('../views/cart/cart.vue');
//个人中心
const profile = ()=>import('../views/profile/profile.vue');
const routes = [
    {
        path: ''
        ,redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/type',
        component: type
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    }
]
const router = new VueRouter({
    routes
    ,mode:'history'
})
export default router

