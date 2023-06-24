<template>
    <div>
        <h3 style="color: red;">总数count： {{ sum }}</h3>
        <input type="text" placeholder="输入名字" v-model="personName" @keydown.enter="addPerson">
        <button  @click="addPerson">添加</button>

        <ul>
            <li v-for="p in personList" :key="p.id"> {{ p.name }}</li>
        </ul>
        
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:"Person",
    data(){
        return {personName:''}
    },
    computed:{
        personList(){
            return this.$store.state.persons
        },
        sum(){
            return this.$store.state.sumNumber
        }
    },
    methods:{
        addPerson(){
            const x = {id:nanoid(),name:this.personName}
            this.$store.commit("ADD_PERSON",x)
            this.personName = ''
        }
    }
}
</script>

<style>

</style>