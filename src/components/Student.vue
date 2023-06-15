

<template>
    <div class="student">
        <h2>学生姓名:{{ name }}</h2>
        <h2>性别:{{ sex }}</h2>
        <button @click="getName">获取学生名</button>
       
    </div>
</template>

<script>


export default {
    name: 'Student',
    data() {
        return {
            name:'张三',
            sex:'男',
            age:10
        }
    },
    props:["getStudentName"],
    methods:{
        getName(){
            this.getStudentName(this.name)
        }
    }

}
</script>

<style scoped>
    .student{
        background-color: orange;
        padding: 5px;
    }
</style>
