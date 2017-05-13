<template>
    <div>
        <div class="divider"></div>
        <h2>推荐商家</h2>
        <router-link :to="'/home/shopdetail/'+ shop.id" class="shop-item" v-for="(shop,i) in sl" :key="i">
            <img class="shop-logo" :src="shop.image_path|imgSrc" alt="">
            <div class="right">
                <h5>{{shop.name}}</h5>
                <Rater :value="shop.rating" :font-size="12" :disabled="true" :margin="0"></Rater>
                <span class="rating">{{shop.rating}}</span>
                <span>月售{{shop.recent_order_num}}单</span>
                <section class="third">
                    <div class="third_left">
                        <span>￥{{shop.piecewise_agent_fee.rules[0].price}}起送 /</span>
                        <span>{{shop.piecewise_agent_fee.tips}}</span>
                    </div>
                    <div class="third_right">
                        <span>{{shop.distance | distance}}</span>
                        <span>/ {{shop.order_lead_time}}分钟</span>
                    </div>
                </section>
            </div>
        </router-link>
        <!--<div class="indicator">
            <span class="fa fa-refresh fa-spin"></span>
        </div>-->
    </div>
</template>
<script>
    import {Rater} from 'vux';
    export default {
        props:["sl"],
        components:{
            Rater
        }
    }
</script>
<style scoped>
    div.divder{
        background-color:#f4f4f4;
        height:10px;
    }
    h2{
        font-size:14px;
        margin:0;
        padding:8px;
        border-bottom:solid 1px #f3f3f3;
    }
    .shop-item{
        border-bottom:solid 1px #f3f3f3;
        padding:8px;
        display:flex;
    }
    .shop-logo{
        width:60px;
        height:60px;
    }
    .right{
        margin-left:8px;
        width:100%;
    }
    h5{
        margin:0;
    }
    .right span{
        font-size:10px;
        color:gray;
    }
    span.rating{
        color:red;
    }
    section.third{
        display:flex;
        justify-content: space-between;
    }
    div.indicator{
        text-align:center;
        font-size:12px;
        height:60px;
        position:relative;
        /*display: flex;
        justify-content: center;
        align-content: center;*/
    }
    /*垂直居中几种方式 弹性布局 行高  绝对定位  四个方向都设置为0和margin 0 并设置宽高*/
    div.indicator span{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        /*top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        display:block;
        width:20px;
        height:20px;*/
    }
</style>