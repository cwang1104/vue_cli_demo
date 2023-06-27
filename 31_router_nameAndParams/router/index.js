//路由管理
import {createRouter,createWebHashHistory} from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

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
                    component:Message,
                    children:[
                        {
                            name:'detail',
                            path:'detail/:id/:title',
                            component:Detail,
                        }
                    ]
                }
            ]
        }
    ],
    history:createWebHashHistory()
})

export default router