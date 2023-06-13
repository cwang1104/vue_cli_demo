

<template>
    <div>
        <h2 ref="name">学生姓名:{{ name }}</h2>
        <h2 ref="age">年龄:{{ age }}</h2>
        <button @click="showName"> 点击提示学生名</button>
        <button @click="showRef">点击获取ref</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: "张三",
            age: 20
        }
    },
    methods: {
        showName() {
            alert(this.name)
        },
        showRef(){
            console.log(this.$refs.name)
            console.log(this)
        }
    },
}
</script>

