<template>
    <div>
        <h2>当前和: {{ $store.state.sumNumber }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前为奇数可加1</button>
        <button @click="decrementWait">等一等再加1</button>
    </div>
</template>

<script>
export default {
    name:"Count",
    data(){
        return {
            n:1,  //选择的数
      
        }
    },
    methods:{
        increment(){
           this.$store.dispatch("sum",this.n)
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

