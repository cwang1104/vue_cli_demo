<template>
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
</template>

<script>
export default {
    name:'Header',
    methods:{
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
    }
}
</script>

<style scoped>

</style>