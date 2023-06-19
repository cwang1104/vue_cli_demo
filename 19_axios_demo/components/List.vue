<template>
   <div class="row">
    <!-- 展示用户列表 -->
      <div v-show="pageInfo.usersList.length" class="card" v-for="user in pageInfo.usersList" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>

      <!-- 展示欢迎词 -->
      <h1 v-show="pageInfo.isFirst">welcome</h1>

      <!-- 展示加载中 -->
      <h1 v-show="pageInfo.isLoading">loading...</h1>

      <!-- 错误信息 -->
      <h1 v-show="pageInfo.errMsg">请求出错了，{{ pageInfo.errMsg }}</h1>
    </div>
</template>

<script>

import PubSub from 'pubsub-js';

export default {
    name:'List',
    data(){
        return {
          pageInfo:{
            isFirst:true,
            isLoading:false,
            errMsg:'',
            usersList: []
          }
         
        }
    },
    methods:{
        // updateUserList()
    },
    mounted(){
        PubSub.subscribe("pushUserList",(_,dataObj)=>{
           this.pageInfo = {...this.pageInfo, ...dataObj}
        })
    }
}
</script>

<style scoped>
     .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>