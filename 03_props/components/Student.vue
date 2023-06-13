

<template>
    <div class="demo">
        <h2>{{ msg }}</h2>
        <h2>学生姓名:{{ name }}</h2>
        <h2>性别:{{ sex }}</h2>
        <h2>年龄:{{ myAge }}</h2>

        <hr>
        <button @click="edit"> 尝试修改年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg:'这是一个学生',
            myAge:this.age,
        }
    },
    methods:{
        edit(){
            this.myAge++
        }
    },
    // props:['name','age','sex'] //简单接收

    //简单接收并校验，不匹配格式会展示，但会警告
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    //接收的同时对数据进行类型限制，必要性的限制
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            default:99,
        },
        sex:{
            type:String,
            required:true,
        }
    }
    
}
</script>
