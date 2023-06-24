<template>
    <div>
        <h3 style="color: red;">总数count： {{ sum }}</h3>
        <h4 style="color: blue;">第一个人名 {{ firstName }}</h4>
        <input type="text" placeholder="输入名字" v-model="personName" @keydown.enter="addPerson">
        <button @click="addPerson">添加</button>
        <button @click="addWang">添加姓王的人</button>
        <button @click="addServer">从服务器添加</button>

        <ul>
            <li v-for="p in personList" :key="p.id"> {{ p.name }}</li>
        </ul>

    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: "Person",
    data() {
        return { personName: '' }
    },
    computed: {
        personList() {
            return this.$store.state.personOptions.persons
        },
        sum() {
            return this.$store.state.countOptions.sumNumber
        },
        firstName() {
            return this.$store.getters['personOptions/firstName']
        }
    },
    methods: {
        addServer(){
            this.$store.dispatch("personOptions/addPersonServer")
        },
        addPerson() {
            if (this.name === '') {
                return alert("不能为空")
            } else {
                const x = { id: nanoid(), name: this.personName }
                // this.$store.persionOptions.commit("ADD_PERSON",x)错误写法
                this.$store.commit("personOptions/ADD_PERSON", x)
                this.personName = ''
            }

        },
        addWang() {

            const x = { id: nanoid(), name: this.personName }
            // this.$store.persionOptions.commit("ADD_PERSON",x)错误写法
            this.$store.dispatch("personOptions/addPersonWang", x)
            this.personName = ''
        }

    }
}
</script>

<style></style>