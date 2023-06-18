<template>
    <div class="app">

        <h2>全局事件总线</h2>
        <h2>{{ msg }} 同学：{{ studentName }}</h2>
        <br>
        <School/>
        <hr>
        <br>
        <Student/>
        
    
    </div>

</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:"App",
        components:{
            Student,School
        },
        data(){
            return {
                msg:"你好啊",
                studentName:''
            }
        },
        methods:{
            getStudentName(val){
                this.studentName = val
            }
        },
        mounted(){
            this.$bus.on('getName',this.getStudentName)
        }

        
    }   
</script>

<style>
    .app{
        background-color: bisque;
        padding: 5px;
    }
</style>