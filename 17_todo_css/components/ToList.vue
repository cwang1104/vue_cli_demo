<template>
    <ul class="todo-main">
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__backInLeft"
            leave-active-class="animate__backOutRight"
            >
            <ToItem 
            v-for="todoObj in todos" 
            :todo="todoObj" 
            :key="todoObj.id"
        />
        </transition-group>
       
    </ul>
</template>

<script>
import 'animate.css'
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
    props:["todos"]
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