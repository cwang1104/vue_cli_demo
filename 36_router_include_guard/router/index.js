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
                    },
                    // beforeEnter:(to,from,next)=>{
                    //     if (to.meta.isAuth){
                    //         if (window.localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else{
                    //             alert('权限不足')
                    //         }
                    //     } else{
                    //         next()
                    //     }
                    // }
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





//全局后置路由守卫，每次路由切换之后被调用，初始化的时候被调用
// router.afterEach((to,from)=>{
//     document.title = to.meta.title || "测试"
// })

export default router