<template>
    <div class="page-root" @scroll="didScroll">
        <HomeHeader 
        :weatherData="weatherData" 
        :positionInfo="positionInfo" 
        :hotSearch="hotSearch">
        </HomeHeader>
        <HomeCarousel :items="carouselData"></HomeCarousel>
        <HomeShopList :sl="shoppingData"></HomeShopList>
        <LoadMore tip="正在加载更多"></LoadMore>
        <div class="back-top" v-show="isShowBackTop" @click="backTopClick" @scroll="didScroll">
            <b class=" fa fa-arrow-up"></b>
            <br />
    	    <span>顶部</span>
        </div>
    </div>
</template>
<script>
  // views 里面放页面级组件  components　里面放页面里面的小组件
 //  请求数据在页面级组件里面请求
    import HomeHeader from '../components/HomeHeader.vue';

    import GeoHash from '../utils/geohash.js';

    import HomeCarousel from '../components/HomeCarousel.vue';

    import HomeShopList from '../components/HomeShopList.vue';
    import {LoadMore} from 'vux';
    import bus from '../utils/Bus.js';
    export default{
        components:{
            HomeHeader,
            HomeCarousel,
            HomeShopList,
            GeoHash,
            LoadMore
        },
        data(){
            return{
                weatherData:{},
                lat:'34.75581',
                lon:'113.66615',
                positionInfo:{},
                hotSearch:[],
                carouselData:[],
                shoppingData:[],
                // 记录是否正在请求商家信息
                isLoading:false,
                isShowBackTop:false
            }
        },
        methods:{
            requestWeather(){
                this.$http.get('ele/bgs/weather/current',{
                    params:{
                        latitude:this.lat,
                        longitude:this.lon
                    }
                }).then(res=>{
                    this.weatherData = res.data;
                });
            },
            requestPosition(){
                // console.log(this.gh);
                this.$http.get('ele/v2/pois/'+ this.gh)
                .then(res=>{
                    this.positionInfo = res.data;
                });
            },
            requestHotSearch(){
                this.$http.get('ele/shopping/v3/hot_search_words',{
                    params:{
                        latitude:this.lat,   // 纬度
                        longitude:this.lon   // 经度
                    }
                }).then(res=>{
                    // console.log(res.data);
                    this.hotSearch = res.data;
                })
            },
            // 请求轮播图
            requestCarousel(){
                // flags[]=F 数组
                this.$http.get('ele/v2/index_entry',{
                    params:{
                        geohash:this.gh,
                        group_type:1,
                        flags:['F']
                    }
                }).then(res=>{
                    // console.log(res.data);
                    this.carouselData = res.data;
                })
            },
            // 请求卖家消息
            requestShopping(){
                if(this.isLoading){
                    return;
                }
                 this.isLoading = true;
                this.$http.get('ele/shopping/restaurants',{
                    params:{
                        latitude:this.lat,
                        longitude:this.lon,
                        offset:this.shoppingData.length,
                        limit:20,
                        extras:['activities'],
                        terminal:'h5'
                    }
                }).then(res=>{
                    console.log(res);
                    this.isLoading = false;
                    this.shoppingData = this.shoppingData.concat(res.data);
                },function(err){
                    this.isLoading = false;
                });
            },
            didScroll(e){
                // 滚动偏移量
                // console.log(e.target.scrollTop);
                var offset = e.target.scrollTop;
                // 元素本身高度
                // console.log(e.target.offsetHeight);
                var height = e.target.offsetHeight
                // 元素实际内容高度
                // console.log(e.target.scrollHeight);
                if(offset+height>=e.target.scrollHeight-30){
                    console.log('123');
                    this.requestShopping();
                }
                if(offset > 400){
                    this.isShowBackTop = true;
                }
                else{
                    this.isShowBackTop = false;
                }
            },
            backTopClick(){
                this.$el.scrollTop = 0;
            }
        },
        mounted(){
            // 请求天气
            this.requestWeather();
            this.requestPosition();
            this.requestHotSearch();
            this.requestCarousel();
            this.requestShopping();
            bus.lat = this.lat;
            bus.lon = this.lon;
        },
        // watch:{
        //      bus.lat = this.lat;
        //      bus.lon = this.lon;
        // }
        computed:{
            gh(){
                return GeoHash.encode(this.lat,this.lon,12);
            }
        }
    }
</script>
<style scoped>
    div.back-top{
        position:fixed;
        width:40px;
        height:40px;
        bottom: 82px;
		right: 20px;
		border: solid 1px grey;
		border-radius: 50%;
		text-align: center;
		color: grey;
		padding-top: 2px;
    }
    div.back-top b{
        font-size:10px;
    }
    div.back-top span{
        position:absolute;
        right:10px;
        top:20px;
        font-size:10px;
    }
</style>