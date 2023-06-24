//用于创建vuex中最为核心的store
//引入vuex
import { createStore } from 'vuex'

import countOptions from './count'
import personOptions from './person'





export default new createStore({
  modules:{
    countOptions:countOptions,
    personOptions:personOptions
  }
})

