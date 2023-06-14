<template>
    <div class="todo-footer" v-show="todoTotal">
        <label>
            <!-- <input type="checkbox" :checked="doneTotal === todoTotal" @change="setAllHandel"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成 {{ doneTotal }}</span> / 全部 {{ todoTotal }}
        </span>
        <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'ToFooter',
    props:["todos","setAllTodo","clearDoneTodo"],
    computed:{
        doneTotal(){
            return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1:0),0)
        },
        todoTotal(){
            return this.todos.length
        },
        isAll:{
            get(){
                return this.doneTotal === this.todoTotal && this.todoTotal > 0
            },

            //计算属性全写法
            set(value){
                this.setAllTodo(value)
            }
        }
    },
    methods:{
        // setAllHandel(){
        //     const isAll = this.doneTotal === this.todoTotal
        //     this.setAllTodo(!isAll)
        //     console.log(isAll)
        // },
        clearAllDone(){
            if (confirm("确定清除吗？")){
                this.clearDoneTodo()
            }
            
        }
    }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>