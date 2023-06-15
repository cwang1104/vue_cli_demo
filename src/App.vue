<template>
    <div class="app">
        <h2>{{ msg }}</h2>
        <br>
        <!-- 子组件给父组件传递数据： 给子组件绑定自定义事件实现 -->
                <!-- 方法一 -->
        <School v-on:sdc="getSchoolName"/>

        <!-- 方法2 vue3移除 -->
        <!-- <School ref="school"/> -->
        <hr>
        <br>
        <!-- 子组件给父组件传递数据： 通过props给子组件传递父组件函数实现 -->
        <Student :getStudentName="getStudentName"/>
        
    
    </div>

</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:"App",
        components:{
            Student,School
        },
        data(){
            return {
                msg:"你好啊"
            }
        },
        methods:{
            getSchoolName(name){
                console.log("school name is ",name)
            },
            getStudentName(name){
                console.log("student name",name)
            }
        },
        mounted(){
            // this.$refs.school.$once('sdc',this.getSchoolName)
        },
    }   
</script>

<style>
    .app{
        background-color: bisque;
        padding: 5px;
    }
</style>