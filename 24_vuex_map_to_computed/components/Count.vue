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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前为奇数可加1</button>
        <button @click="incrementWait(n)">等一等再加1</button>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    name:"Count",
    data(){
        return {
            n:1,  //选择的数
      
        }
    },
    computed:{

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

        //借助mapMutations生成方法,均有数组写法，同上
        ...mapMutations({increment:"SUM",decrement:"DE"}),
        // ==>相当于：
        // increment(val){
        //     this.$store.commit("SUM",val)
        // }

        // increment(){
        //    this.$store.dispatch("sum",this.n)
        //    console.log(this.$store)
        // },
        // decrement(){
        //   this.$store.dispatch("de",this.n)
        // },


        //mapActions
            ...mapActions({incrementOdd:"sumOdd",incrementWait:"sumWait"}),
        // incrementOdd(){
        //     this.$store.dispatch("sumOdd",this.n)
        // },
        // decrementWait(){
        //     this.$store.dispatch("sumWait",this.n)
        // }
    }
    
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>

