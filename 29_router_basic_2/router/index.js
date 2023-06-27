//路由管理
import {createRouter,createWebHashHistory} from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'

const router = new createRouter({
    routes:[
        {
            path:'/about',
            component:About

        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                }
            ]
        }
    ],
    history:createWebHashHistory()
})

export default router