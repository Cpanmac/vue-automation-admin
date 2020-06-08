import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

Vue.use(Router)

import Layout from '@/layout'

const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/index'),
                meta: {
                    title: '控制台'
                }
            },
            {
                path: 'personal',
                component: { render: h => h('router-view') },
                redirect: '/personal/profile',
                meta: {
                    title: '个人中心',
                    breadcrumb: false
                },
                children: [
                    {
                        path: 'profile',
                        name: 'prosonalProfile',
                        component: () => import('@/views/personal/profile'),
                        meta: {
                            title: '个人资料'
                        }
                    },
                    {
                        path: 'edit/password',
                        name: 'prosonalEditPassword',
                        component: () => import('@/views/personal/edit.password'),
                        meta: {
                            title: '修改密码'
                        }
                    }
                ]
            }
        ]
    }
]

import Banner from './modules/banner'
import News from './modules/news'
import Brand from './modules/brand'
import Log from './modules/log'

const asyncRoutes = [
    Banner,
    News,
    Brand,
    Log
]

// const asyncRoutes = [
//     {
//         meta: {
//             title: '主导航1',
//             icon: 'brand'
//         },
//         children: [
//             Banner
//         ]
//     },
//     {
//         meta: {
//             title: '主导航2',
//             icon: 'brand'
//         },
//         children: [
//             News,
//             Brand
//         ]
//     },
//     {
//         meta: {
//             title: '主导航3'
//         },
//         children: [
//             Log
//         ]
//     }
// ]

const lastRoute = [{
    path: '*',
    component: () => import('@/views/404'),
    meta: {
        title: '找不到页面',
        sidebar: false
    }
}]

const router = new Router({
    routes: constantRoutes
})

// 解决路由在跳转时 push 了相同地址报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

router.beforeEach(async(to, from, next) => {
    NProgress.start()
    // 已经登录，但还没根据权限动态挂载路由
    if (store.getters['token/isLogin'] && !store.state.global.permissionInit) {
        /**
         * 重置 matcher
         * https://blog.csdn.net/baidu_28647571/article/details/101711682
         */
        router.matcher = new Router({
            routes: constantRoutes
        }).matcher
        const accessRoutes = await store.dispatch('global/generateRoutes', {
            asyncRoutes,
            currentPath: to.path
        })
        router.addRoutes(accessRoutes)
        router.addRoutes(lastRoute)
        next({ ...to, replace: true })
    }
    if (store.getters['token/isLogin']) {
        if (to.name) {
            if (to.matched.length !== 0) {
                next()
                NProgress.done()
            } else {
                // 如果是通过 name 跳转，并且 name 对应的路由没有权限时，需要做这步处理，手动指向到 404 页面
                next({
                    path: '/404'
                })
                NProgress.done()
            }
        } else {
            next()
            NProgress.done()
        }
    } else {
        if (to.name != 'login') {
            next({
                name: 'login',
                query: {
                    redirect: to.fullPath
                }
            })
            NProgress.done()
        } else {
            next()
            NProgress.done()
        }
    }
})

export default router
