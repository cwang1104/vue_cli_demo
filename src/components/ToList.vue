<template>
    <ul class="todo-main">
        <ToItem v-for="todoObj in todos" :todo="todoObj" :key="todoObj.id"></ToItem>
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
            todos:[
                {id:'001',title:'抽烟',done:true},
                {id:'002',title:'喝酒',done:true},
                {id:'003',title:'开车',done:false},
            ]      
        }
    },
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