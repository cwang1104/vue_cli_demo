import axios from "axios"
import { nanoid } from "nanoid"
const personOptions = {
    namespaced:true,
    actions:{
        addPersonWang(ctx,val){
            if (val.name.indexOf('王') === 0 ){
                ctx.commit('ADD_PERSON',val)
            } else{
                alert('需要姓王的')
            }
        },
        addPersonServer(ctx,_){
            axios.get('http://localhost:8080/students').then(
                resp =>{
                    // console.log("@@",resp.data[0])
                    ctx.commit('ADD_PERSON',{id:nanoid(),name:resp.data[1].name})
                    alert("添加成功"+resp.data[1].name)
                },
                err => {
                    alert(err.message)
                }
            )
           
        }
    },
    mutations:{
        ADD_PERSON(state,val){
            state.persons.unshift(val)
        }
    },
    state:{
        persons:[{id:"001",name:"jack"}]
    },
    getters:{
        firstName(state){
            return state.persons[0].name
        }
    }
}

export default personOptions