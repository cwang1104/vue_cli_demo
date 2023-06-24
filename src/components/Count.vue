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
        <button @click="decrementWait(n)">等一等再加1</button>
        <h3 style="color: aqua;">总人数为：{{ personNum }}</h3>
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    name:"Count",
    data(){
        return {
            n:1,  //选择的数
      
        }
    },
    computed:{
        personNum(){
            // console.log(this.$store.state)
            return this.persons.length
        },
        
        //数组写法  ===> countOptions 需要开启namespaced为true
        ...mapState("countOptions",["sumNumber","school","subject"]),
        ...mapState("personOptions",['persons']),
       

        //生成getters 对应的计算属性
        ...mapGetters('countOptions',["bigSum"]),
    },
    methods:{

        ...mapMutations('countOptions',{increment:"SUM",decrement:'DE'}),

        ...mapActions('countOptions',{incrementOdd:'sumOdd',decrementWait:'sumWait'}),
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

