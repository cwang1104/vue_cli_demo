<template>
   <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
import PubSub from 'pubsub-js'


export default {
    name:"Search",
    data(){
        return {
            searchName:''
        }
    },
    methods:{
        searchUsers(){
            PubSub.publish('pushUserList',{isFirst:false, isLoading:true,errMsg:'',usersList: []})
            axios.get('https://api.github.com/search/users?q='+this.searchName).then(
                resp =>{
                    console.log("success",resp.data)
                    PubSub.publish('pushUserList',{isLoading:false,errMsg:'',usersList: resp.data.items})
                },
                err=>{
                    PubSub.publish('pushUserList',{isLoading:false,errMsg:err.message,usersList: []})
                    console.log('failed ',err)
                }
            )
            this.searchName=''
        }
    }
}
</script>

<style scoped>
</style>