<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handelCheck(todo.id)" />

            <!-- 利用v-model数据双向绑定，可以修改藏在对象里面的 props传过来的数据 -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" 
            v-show="todo.isEdit" 
            :value="todo.title" 
            @blur="handleBlur(todo, $event)"
            ref="getFocus"
            >
        </label>
        <button class="btn btn-danger" @click="handelRemove(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>

import PubSub from 'pubsub-js'

export default {
    name: 'ToItem',
    props: ["todo"],
    methods: {
        handelCheck(id) {
            this.$bus.emit('checkTodo', id)
        },
        handelRemove(id) {
            if (confirm("你确定删除吗？")) {
                // console.log("@@",id)
                PubSub.publish('removeTodo', id)
            }
        },
        handleEdit(todo) {
            this.$bus.emit('editTodo', todo)

            //dom节点更新完成后执行
            this.$nextTick(()=>{
                this.$refs.getFocus.focus()
            })
        },
        handleBlur(todo, e) {
            todo.isEdit = false
            if (!e.target.value.trim()) {
                console.log("@@@@@@@")
                e.target.value = todo.title
                return alert("不能为空")
            }
            console.log("???")
            console.log("todo@", todo.id, e.target.value)
            todo.title = e.target.value
            this.$bus.emit('updateTodo',  todo)
        }
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

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>