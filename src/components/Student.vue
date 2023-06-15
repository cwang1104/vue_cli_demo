

<template>
    <div class="demo">
        <h2>学生姓名:{{ name }}</h2>
        <h2>性别:{{ sex }}</h2>

       
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
    }
}
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>
