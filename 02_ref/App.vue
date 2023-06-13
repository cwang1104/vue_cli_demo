<template>
    <div>
        <School ref="school"></School>
        <button @click="showScRef">点击获取school组件ref</button>
        <student></student>
    </div>

</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:"App",
        components:{
            School,
            Student
        },
        methods:{
            showScRef(){
                // console.log(this)
                console.log(this.$refs.school.schoolName)
                // console.log('@',this)
            }
        }

    }   
</script>

<style></style>