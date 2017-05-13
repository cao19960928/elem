<template>
    <div class="page-root">
        
    </div>
</template>
<script>
    import bus from '../utils/Bus.js'
    export default {
        // 当被路由激活的时候调用  不能使用mounted  因为mounted只在页面进入时候渲染一次 返回再进入就不再渲染了
        activated(){
            // console.dir(this.$route);
            this.requestShopInfo();
        },
        methods:{
            requestShopInfo(){
                this.$http.get('ele/shopping/restaurant/' + this.$route.params.id,{
                    params:{
                        extras:[
                        'activities',
                        'album',
                        'license',
                        'identification',
                        'statistics'
                        ],
                        latitude:bus.lat,
                        longitude:bus.lon
                    }
                }).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>
<style scoped>
    
</style>