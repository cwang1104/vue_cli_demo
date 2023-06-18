

<template>
    <div class="school">
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
    .school{
        background-color: yellow;
        padding: 5px;
        margin-top: 30px;
    }
</style>
