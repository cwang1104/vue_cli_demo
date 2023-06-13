

<template>
    <div class="demo">
        <h2>学校名称:{{ name }}</h2>
        <h2>地址:{{ addr }}</h2>
       
    </div>
</template>

<script>


export default {
    name: 'School',
    data() {
        return {
            name:'sgg',
            addr:'beiJing',
        }
    }
}
</script>

<style scoped>
    .demo{
        background-color: yellow;
    }
</style>
