

<template>
    <div>

        <h1>集成第三方动画</h1>


        <button @click="isShow = !isShow">显示/隐藏</button>

       
        <!-- appear 初始化是否展示动画 -->
        <transition-group name="animate__animated animate__bounce" 
            appear
            enter-active-class="animate__bounceIn"
            leave-active-class="animate__bounceOutUp"
            >
            <h2 v-show="isShow" key="1">你好啊</h2>
            <h2 v-show="!isShow" key="2">123</h2>

        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: "Test3",
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
        background-color: palegoldenrod;
    }

</style>