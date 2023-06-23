<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :foods="foods" msg="hello">no 1</slot>
       
      

    </div>
</template>

<script>
export default {
    name:"Category",
    props:["title"],
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
    .category{
        background-color: aquamarine;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
        height: auto;
    }
    video{
        width: 100%;
        height: auto;
    }
</style>