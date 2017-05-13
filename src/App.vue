<template>
  <div id="app">
    <!--<button @click="btnClick">弹出actionSheet</button>
    <br>-->
    <!--<img src="./assets/logo.png">-->
    <!--<Swiper
    :list="demoList"
    auto="true"
    loop="true"
    duration="100"
    height="aspect-ratio"
    dots-position="left"
    threshold="10"
    ></Swiper>-->
    <tabbar v-show="currentPathNum <= 1">
      <tabbar-item selected link="/">
        <img slot="icon" :src="pic1">
        <span slot="label">外卖</span>
      </tabbar-item>
      <tabbar-item link="/discover">
        <img slot="icon" :src="pic2">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/order">
        <img slot="icon" :src="pic3">
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <img slot="icon" :src="pic4">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <!--跳转之后不销毁-->
        <transition :name="animateType">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    <!--<Actionsheet 
    v-model="isShow" 
    :show-cancel="true"
    :menus="actionSheetMenus"
    @on-click-menu="menuClick"
    @on-click-menu-cancel="cancelClick"
    ></Actionsheet>-->

    <!--<Alert
    :value="isShow"
    title="vux is cool"
    button-text="确定"
    @on-hide="isShow=false"
    >正文内容 slot default</Alert>-->
  </div>
</template>

<script>

// module.exports(只能导出一个)
//  export default {}  (可以导出多个  也可以只导出一个)
//ES6
  import {Actionsheet,Alert,Swiper} from 'vux';  
  // var vux = require('vux');
  // var Actionsheet = vux.Actionsheet;
  import {Tabbar , TabbarItem} from 'vux';
  // 放在assets里面的资源可以import导入
  import pic1 from './assets/1.png';
  import pic2 from './assets/2.png';
  import pic3 from './assets/3.png';
  import pic4 from './assets/4.png';
  // console.log(pic1);
  export default {
    name: 'app',
    data:function()
    {
      return{
        pic1,
        pic2,
        pic3,
        pic4,
        animateType:'',
        currentPathNum:1
      }
    },
    methods:{
      },
    components:{
      Tabbar,
      TabbarItem
    },
    watch:{
      // to 是当前路由路径 from 是跳转之前路由路径
      $route(to,from){
        // console.log('路由跳转了');
        // console.dir(arguments);
        // var str1 = to.path;
        // console.log(str1.substr(0,5));
        // var str2 = from.path;
        // console.log(str2.substr(0,5));
        // if(str1.substr(0,5) === str2.substr(0,5)){
        //   if(str1.length > str2.length){
        //     this.animateType = 'page-in';
        //   }
        //   else{
        //     this.animateType = 'page-out';
        //   }
        // }
        // else{
        //   this.animateType = '';
        // }
        var toNum = to.path.split('/').length - 1;
        var fromNum = from.path.split('/').length - 1;
        this.currentPathNum = toNum;
        if(toNum>fromNum){
          this.animateType = 'page-in';
        }
        else if(toNum<fromNum){
          this.animateType = 'page-out';
        }
        else{
          this.animateType = '';
        }
      }
    }
}
</script>
<!--加上scoped只影响本组件  不加scoped对全局都影响  可以直接使用less lang="less"  需要在webpack中安装less-loader插件-->
<style scoped>
    /*进入动画的第一帧 */
    .page-in-enter{
        position:absolute;
        transition: all 0.3s ease-out;
        transform:translateX(100%);
    }
    .page-in-enter-active{
        position:absolute;
        /*cubic-bezier(0,0.5,0.5,1) 贝塞尔曲线*/
        transition: all 0.3s ease-out;
    }
    /* 离开动画的第一帧*/
    .page-in-leave{
        position:absolute;
        transition:all 0.3s ease-out;
        transform: translate(0,0);
    }
    .page-in-leave-active{
        position:absolute;
        transition:all 0.3s ease-out;
        transform:translateX(-50%);
    }
    .page-out-enter{
        position:absolute;
        transition: all 0.3s ease-out;
        transform:translateX(-50%);
    }
    .page-out-enter-active{
        position:absolute;
        /*cubic-bezier(0,0.5,0.5,1) 贝塞尔曲线*/
        transition: all 0.3s ease-out;
    }
    .page-out-leave{
        position:absolute;
        transition:all 0.3s ease-out;
        transform: translate(0,0);
        z-index: 10;
    }
    .page-out-leave-active{
        position:absolute;
        transition:all 0.3s ease-out;
        transform:translateX(100%);
        z-index: 10;
    }
</style>
