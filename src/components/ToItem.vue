<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handelCheck(todo.id)"/>

            <!-- 利用v-model数据双向绑定，可以修改藏在对象里面的 props传过来的数据 -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handelRemove(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'ToItem',
    props:["todo"],
    methods:{
        handelCheck(id){
            this.$bus.emit('checkTodo',id)
        },
        handelRemove(id){
            if (confirm("你确定删除吗？")){
                // console.log("@@",id)
                this.$bus.emit('removeTodo',id)
            }
        }
    },
    beforeDestroy(){
        this.$bus.off('checkTodo')
        this.$bus.off('removeTodo')
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover{
    background-color: #ddd;
}

li:hover button {
    display: block;
}

</style>