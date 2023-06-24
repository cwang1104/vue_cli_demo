<template>
    <div>
        <h2>当前和: {{ sumNumber }}</h2>
        <h2>当前十倍和: {{ bigSum }}</h2>
        <h2>学校：{{ school }}</h2>
        <h2>学科：{{ subject }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前为奇数可加1</button>
        <button @click="decrementWait">等一等再加1</button>
        <h3 style="color: aqua;">总人数为：{{ personNum }}</h3>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name:"Count",
    data(){
        return {
            n:1,  //选择的数
      
        }
    },
    computed:{
        personNum(){
            return this.$store.state.persons.length
        },
        // mapState生成计算属性

        //对象写法
        //es6写法。。。（），
        // ...mapState({sumNumber:"sumNumber",school:"school",subject:"subject"}),

        //数组写法
        ...mapState(["sumNumber","school","subject"]),
       

        //生成getters 对应的计算属性
        ...mapGetters(["bigSum"]),
    },
    methods:{
        increment(){
           this.$store.dispatch("sum",this.n)
           console.log(this.$store)
        },
        decrement(){
          this.$store.dispatch("de",this.n)
        },
        incrementOdd(){
            this.$store.dispatch("sumOdd",this.n)
        },
        decrementWait(){
            this.$store.dispatch("sumWait",this.n)
        }
    }
    
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>

