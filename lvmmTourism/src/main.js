// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import lazyload from "vue-lazyload"
Vue.use(
  lazyload,{
    loading:'../static/img/lmm.gif'}
)
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import"./assets/css/iconfont.css"
import './assets/css/common.css'
import"./assets/css/swiper.css"
import "./assets/css/lvService.css"
import"./assets/js/jquery-1.11.3"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

