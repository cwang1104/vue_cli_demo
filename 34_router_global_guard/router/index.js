//路由管理
import { createRouter, createWebHashHistory } from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new createRouter({
    routes: [
        {

            name: "guanyu",
            path: '/about',
            component: About,
            meta:{
                title:"关于"
            }
            

        },
        {
            name: 'shouye',
            path: '/home',
            component: Home,
            meta:{
                title:"首页"
            },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta:{
                        title:"新闻",
                        isAuth:true
                    }
                },
                {
                    name: "xiaoxi",
                    path: 'message',
                    component: Message,
                    meta:{
                        title:"消息",
                        isAuth:true
                    },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {
                                title:"详情",
                                keepAlive: true,
                                isAuth:true
                            },

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
                            props({ params }) {
                                return {
                                    id: params.id,
                                    title: params.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
    history: createWebHashHistory()
})

//全局前置路由守卫,每次路由切换之前被调用，初始化的时候被调用
router.beforeEach((to, from, next) => {
    console.log('@', to)
    console.log('@', from)
    if (to.meta.isAuth){
        if (window.localStorage.getItem('school') === 'atguigu') {
            next()
        } else{
            alert('权限不足')
        }
    } else{
        next()
    }
})

//全局后置路由守卫，每次路由切换之后被调用，初始化的时候被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || "测试"
})

export default router