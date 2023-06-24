
const countOptions = {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        SUM(state,val){
            state.sumNumber += val
        },
        DE(state,val){
            state.sumNumber -= val
        }
    },
    state:{
        sumNumber:0,  //求和的数
        school:"sgg",
        subject:"前端",
    },
    getters:{
        bigSum(state){
            return state.sumNumber * 10
        }
    }
}

export default countOptions