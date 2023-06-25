//路由管理
import {createRouter,createWebHashHistory} from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'

const router = new createRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ],
    history:createWebHashHistory()
})

export default router