

<template>
    <div>
        <h2>学生姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="showName"> 点击提示学校名</button>
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
        }
    },
}
</script>

