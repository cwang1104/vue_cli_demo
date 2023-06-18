<template>
    <div>

        <h1>动画演示</h1>

        <button @click="isShow = !isShow">显示/隐藏</button>

        <!-- //动画加transition包裹，自动渲染进场、立场动画 -->
        <transition name="hello" appear>
            <h2 v-show="isShow">你好啊</h2>

        </transition>
</div>
</template>

<script>
    export default {
        name:"Test",
        data(){
            return {
                name:"jack",
                isShow:true
            }
        }
    }
</script>

<style scoped>
    h2 {
        background-color: aqua;
    }


    .hello-enter-active{
        animation: isShowText 1s;
    }

    .hello-leave-active {
        animation: isShowText 1s reverse;
    }

   

    @keyframes isShowText {
        from{
            transform:translateX(-100%);
        }

        to{
            transform: translateX(0px);
        }
    }
</style>