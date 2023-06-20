<template>
    <div class="container">
        <Category title="美食">
            <ul>
            <li v-for="list,index in foods" :key="index">{{ list }}</li>
        </ul>
        </Category>
        <Category title="电影" :listData="films">
            <img src="https://www.xinhuanet.com/ent/20230202/5dbc0d97cfe645caa6073ec456e33bc5/202302025dbc0d97cfe645caa6073ec456e33bc5_20230202f60cf0f301764d74874e078db0bc2e7e.jpg" alt="">
        </Category>
        <Category title="汽车">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
</style>




