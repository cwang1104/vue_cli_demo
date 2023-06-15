<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <ToHeader :addTodo="addTodo"></ToHeader>
                <ToList :todos="todos" :checkTodo="checkTodo" :removeTodo="removeTodo"></ToList>
                <ToFooter :todos="todos" :setAllTodo="setAllTodo" :clearDoneTodo="clearDoneTodo"></ToFooter>
            </div>
        </div>
    </div>
</template>

<script>

import ToHeader from './components/ToHeader.vue'
// import ToItem from './components/ToItem.vue'
import ToList from './components/ToList.vue'
import ToFooter from './components/ToFooter.vue'


export default {
    name: "App",
    components: {
        ToHeader,
        // ToItem,
        ToList,
        ToFooter
    },
    data() {
        return {
            todos: JSON.parse(sessionStorage.getItem("todos")) || []
        }
    },
    // mounted() {
    //     // console.log("@@")
    //     // const dt = [{id:"001",title:"吃饭",done:false}]
    //     // this.todos = dt
    //     // window.sessionStorage.setItem("todos",JSON.stringify({id:"001",title:"吃饭",done:false}))
    //     const x = window.sessionStorage.getItem("todos")
    //     if (x !== null) {
    //         this.todos = JSON.parse(x)
    //     }
    // },
    methods: {
        checkTodo(id) {
            console.log("修改了一个数据: ", id)
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.done = !todo.done
            })
            // window.sessionStorage.setItem("todos",JSON.stringify(this.todos))
        },
        addTodo(e) {
            console.log("添加了一个数据: ", e.title)
            this.todos.unshift(e)
            // window.sessionStorage.setItem("todos",JSON.stringify(this.todos))
        },
        removeTodo(id) {
            console.log("删除了一个数据：", id)
            // this.todos.forEach((todo)=>{
            //     if (todo.id === id){
            //         this.todos.pop(todo)
            //     }
            // })
            // this.todos = this.todos.filter((todo)=>{
            //         return todo.id !== id
            // })
            this.todos = this.todos.filter(todo => todo.id !== id)
            // window.sessionStorage.setItem("todos",JSON.stringify(this.todos))

        },
        setAllTodo(done) {
            this.todos.forEach((todo) => {
                todo.done = done
            })
            // window.sessionStorage.setItem("todos",JSON.stringify(this.todos))
        },
        clearDoneTodo() {
            this.todos = this.todos.filter((todo) => {
                return todo.done === false
            })
            // window.sessionStorage.setItem("todos",JSON.stringify(this.todos))
        }
    },
    watch: {
        todos: {
            deep:true,
            handler(value) {
                sessionStorage.setItem("todos", JSON.stringify(value))
            }
        }
    }
}   
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>