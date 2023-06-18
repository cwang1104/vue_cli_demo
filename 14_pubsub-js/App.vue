<template>
    <div class="app">

        <h2>全局事件总线</h2>
        <h2>{{ msg }} 同学：{{ studentName }}</h2>
        <br>
        <School/>
        <hr>
        <br>
        <Student/>
        
       <button @click="deleteD">取消订阅</button>
    
    </div>

</template>

<script>
    import pubsub from 'pubsub-js'
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
            },
            deleteD(){
                pubsub.unsubscribe(this.pubID)
                this.studentName = ''

            }
            
        },
        mounted(){
           this.pubID =  pubsub.subscribe('getName',(msgName,val)=>{
                this.getStudentName(val)
            })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubID)
        },

        
    }   
</script>

<style>
    .app{
        background-color: bisque;
        padding: 5px;
    }
</style>