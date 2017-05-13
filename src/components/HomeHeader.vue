<template>
    <header>
        <div class="top clear-fix">
            <div class="position">
                <span class="fa fa-map-marker"></span>
                <span class="position-text">{{positionInfo.name}}</span>
                <span class="fa fa-angle-down"></span>
            </div>
            <div class="weather">
                <div>
                    <div>{{Math.round(weatherData.temperature)}}°</div>
                    <div>{{weatherData.description}}</div>
                </div>
                <!--divison 分开 分割-->
                <img :src="weatherData.image_hash | imgSrc">
            </div>
        </div>
        <input type="text" class="middle" placeholder="搜索商家、商品">
        <!--<Scroller lock-y scrollbar-x v-if="hotSearch.length>0">-->
            <div class="bottom">
                <span v-for="data in hotSearch" class="hot-search">{{data.word}}</span>
            </div>
        <!--</Scroller>-->
    </header>
</template>
<script>
    import {Scroller} from 'vux';
    export default {
        props:['weatherData','positionInfo','hotSearch'],
        components:{
            Scroller
        }
    }
</script>
<style scoped>
    header{
        background-color:#0096ff;
        color:white;
        padding:16px;
    }
    div.position{
        float:left;
        font-size:18px
    }
    span.position-text{
        display:inline-block;
        max-width:180px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    span.fa{
        position:relative;
        top:-5px;
    }
    div.weather{
        float:right;
        font-size:12px;
        display:flex;
    }
    div.weather img{
        height:30px;
        width:30px;
        /*border:solid 1px black;*/
    }
    input.middle{
        width:100%;
        height:30px;
        border-radius:15px;
        border:none;
        margin: 10px 0;
        text-align: center;
    }
    div.bottom{
        white-space: nowrap;
        overflow:scroll;
        font-size: 12px;
    }
    span.hot-search{
        margin: 0 8px;
    }
</style>