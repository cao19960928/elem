// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Alert,AlertPlugin,AjaxPlugin} from 'vux';
import {imgSrc,imgPre,distance} from './utils/filter.js';
//全局注册(plguin )
Vue.component("Alert",Alert);
// import App from './App' 相当于  var App = require('./App.vue');
//以插件形式使用alert
Vue.use(AlertPlugin);

Vue.use(AjaxPlugin);
// 全局注册过滤器 任何组件都可以使用
Vue.filter('imgSrc',imgSrc);
Vue.filter('imgPre',imgPre);
Vue.filter('distance',distance);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',  
  components: { App }
})

// 组件可以写单标签  除了里面有插槽必须写成双标签
