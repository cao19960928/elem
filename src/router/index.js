// 路由配置文件
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Mine from '../views/Mine'
import Discover from '../views/Discover'
import Order from '../views/Order';
import ShopDetail from '../views/ShopDetail'
//  页面级组件命名后面最好加page  看起来就知道是页面级组件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      // 将根路径重新定向到/home路径
      path:'/',
      redirect:'/home'
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/order',
      component: Order
    },
    {
      // 二级页面路径命名 前面要追加一级路径
      path:'/home/shopdetail/:id',
      component:ShopDetail
    }
  ]
})
