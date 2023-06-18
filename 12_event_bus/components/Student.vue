

<template>
    <div class="student">
        <h2>学生姓名:{{ name }}</h2>
        <h2>性别:{{ sex }}</h2>
        <button @click="namePush">获取名字</button>
       
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
    methods:{
        namePush(){
            this.$bus.emit('getName',this.name)
        }
    },
    
    beforeDestroy() {
      this.$bus.off('getName')  
    },

}
</script>

<style scoped>
    .student{
        background-color: orange;
        padding: 5px;
    }
</style>
