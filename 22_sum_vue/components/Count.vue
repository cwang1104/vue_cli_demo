<template>
    <div>
        <h2>当前和: {{ sumNumber }}</h2>
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
            sumNumber:0  //求和的数
        }
    },
    methods:{
        increment(){
            this.sumNumber = this.sumNumber + this.n
        },
        decrement(){
            this.sumNumber -= this.n
        },
        incrementOdd(){
            if (this.sumNumber % 2){
                this.sumNumber += this.n
            }
        },
        decrementWait(){
            setTimeout(()=>{
                this.sumNumber += this.n
            },500)
        }
    }
    
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>

