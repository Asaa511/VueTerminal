import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import store from './store/store';


Vue.config.productionTip = false

new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');