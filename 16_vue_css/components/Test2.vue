

<template>
    <div>

        <h1>过渡效果</h1>


        <button @click="isShow = !isShow">显示/隐藏</button>

       
        <!-- appear 初始化是否展示动画 -->
        <transition-group name="hello2" appear>
            <h2 v-show="isShow" key="1">你好啊</h2>
            <h2 v-show="!isShow" key="2">123</h2>

        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Test2",
    data() {
        return {
            name: "jack",
            isShow: true
        }
    }
}
</script>


<style scoped>
    h2 {
        background-color: orange;
      
    }

    /* 进入的起点,离开的终点*/

    /* vue3进入需要加from */

    .hello2-enter-from,.hello2-leave-to{
        transform: translateX(-100%);
    }

    .hello2-enter-active,.hello2-leave-active{
        transition: 1s linear;
    }

    /* 进入的终点,离开的起点 */
    .hello2-enter-to,.hello2-leave-from{
        transform: translateX(0);
    }

   


</style>