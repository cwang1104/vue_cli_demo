//用于创建vuex中最为核心的store
//引入vuex
import { createStore } from 'vuex'

// 准备actions---用于响应组件中的动作
const actions = {
    sum(ctx,val){
       ctx.commit("SUM",val)
    },
    de(ctx,val){
        ctx.commit("DE",val)
    },
    sumOdd(ctx,val){
        if (ctx.state.sumNumber % 2){
            ctx.commit("SUM",val)
        }
    },
    sumWait(ctx,val){
        setTimeout(()=>{
            ctx.commit("SUM",val)
        },1000)
    }

}
// 准备mutations---用于操作数据
const mutations = {
    SUM(state,val){
        state.sumNumber += val
    },
    DE(state,val){
        state.sumNumber -= val
    },
    ADD_PERSON(state,val){
        state.persons.unshift(val)
    }
}
// 准备state---用于存储数据
const state = {
    sumNumber:0,  //求和的数
    school:"sgg",
    subject:"前端",
    persons:[{id:"001",name:"jack"}]
}

const getters = {
    bigSum(state){
        return state.sumNumber * 10
    }
}

export default new createStore({
    actions,
    mutations,
    state,
    getters
})

