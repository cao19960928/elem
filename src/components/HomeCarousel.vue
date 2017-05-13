<template>
    <div>
        <Swiper :loop="true" dots-position="center">
            <SwiperItem v-for="(page,index) in groupedItems" :key="index" >
                <div class="page-item" v-for="item in page">
                    <img :src="item.image_url|imgPre">
                    <br>
                    <span>{{item.title}}</span>
                </div>
            </SwiperItem>
        </Swiper> 
    </div>
</template>
<script>
    import {Swiper, SwiperItem} from 'vux';
    export default {
        components:{
            Swiper,
            SwiperItem
        },
        props:["items"],
        computed:{
            groupedItems:function(){
                var result = [];
                var temp = [];
                this.items.forEach(function(item,index,arr){
                    temp.push(item);
                    if((index+1) % 8 == 0 || index == arr.length - 1){
                        result.push(temp);
                        temp=[];
                    }
                });
                // console.dir(result);
                return result;
            }
        }
    }
</script>
<style scoped>
    div.page-item{
        display:inline-block;
        width:25%;
        height:60px;
        text-align:center;
    }
    div.page-item img{
        width:44px;
        height:44px;
        
    }
    div.page-item span{
        font-size:12px;
    }
</style>