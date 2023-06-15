<template>
    <ul class="todo-main">
        <ToItem 
            v-for="todoObj in todos" 
            :todo="todoObj" 
            :key="todoObj.id"
            :checkTodo="checkTodo"
            :removeTodo="removeTodo"
        />
    </ul>
</template>

<script>

import ToItem from './ToItem.vue'

export default {
    name: 'ToList',
    components: {
        ToItem,
    },
    data() {
        return {
        }
    },
    props:["todos","checkTodo","removeTodo"]
}
</script>

<style scoped>

.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>