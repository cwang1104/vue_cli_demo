<template>
    <div class="container">
        <Category title="美食">
            <ul slot="center">
                <li v-for="list, index in foods" :key="index">{{ list }}</li>
            </ul>
        </Category>
        <Category title="电影" :listData="films">
            <template v-slot:center>
                <img slot="center" src="https://www.xinhuanet.com/ent/20230202/5dbc0d97cfe645caa6073ec456e33bc5/202302025dbc0d97cfe645caa6073ec456e33bc5_20230202f60cf0f301764d74874e078db0bc2e7e.jpg"
                alt="">
            </template>
            <template v-slot:footer>
                <a slot="footer" href="http://www.baidu.com">更多</a>        
            </template>
            
        </Category>
        <Category title="汽车">
            <template v-slot:center>
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            </template>
            
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue'


export default {
    name: "App",
    components: {
        Category
    },
    data() {
        return {
            foods: ["番茄", '薯片', '蛋糕', '可乐'],
            films: ["《飞机》", '《大炮》', '《骑兵》', '《炮兵》'],
            cars: ["马自达", '奔驰', '宝马', '奥迪']
        }
    }
}   
</script>


<style>
.container {
    display: flex;
    justify-content: space-around;
}
a {
    text-align: center;
}
</style>




