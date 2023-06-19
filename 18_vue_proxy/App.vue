<template>
    <div id="root">
      <h2>hello</h2>
      <button @click="getStudengInfo">获取学生信息</button><hr><br><br>
      <button @click="getCarInfo">获取汽车信息</button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "App",
    methods:{
        getStudengInfo(){
            // 方式1
            // axios.get("http://localhost:8080/students").then(
            // 方式2  前缀方式
            axios.get("http://localhost:8080/proapi/students").then(
                response =>{
                    console.log('请求成功: ',response.data)
                },
                err =>{
                    console.log("failed ",err)
                }
            )
        },
        getCarInfo(){
            axios.get("http://localhost:8080/carapi/cars").then(
                res => {
                    console.log('success')
                    console.log(res)
                },
                err =>{
                    console.log(err)
                }
            )
        }
    }
}   
</script>







