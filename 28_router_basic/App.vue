<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <Header></Header>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">

                    <!-- 利用a标签切换页面 -->
                    <!-- <a class="list-group-item" href="./about.html">About</a>
                    <a class="list-group-item active" href="./home.html">Home</a> -->

                    <!-- 利用router-link切换路由 -->
                    <router-link class="list-group-item" active-class="active" to="./about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="./home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import Header from './components/Header.vue'
export default {
    name: "App",
    components:{Header}
}   
</script>





