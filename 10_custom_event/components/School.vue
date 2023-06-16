

<template>
    <div class="school">
        <h2>学校名称:{{ name }}</h2>
        <h2>地址:{{ addr }}</h2>
        <button @click="sendSchoolName">发送学校名称</button>
        <button @click="unbind">解绑事件</button>
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
    },
    methods:{
        sendSchoolName(){
            this.$emit("sdc",this.name)
        },
        unbind(){
            this.$off("sdc")
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
