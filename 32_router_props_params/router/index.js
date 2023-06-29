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
                            
                            //props第一种，对象固定值写法
                            // props:{
                            //     id:'001',
                            //     title:"只能传固定值"
                            // }

                            // props第二种写法，布尔值写法，接收params参数
                            // props:true

                            //props第三种写法，函数写法，通过回调函数取$route进行数据传递
                            // props($router){
                            //     return {
                            //         id:$router.params.id,
                            //         title:$router.params.title
                            //     }
                            // }
                            //参数解构写法
                            props({params}){
                                return {
                                    id:params.id,
                                    title:params.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
    history:createWebHashHistory()
})

export default router