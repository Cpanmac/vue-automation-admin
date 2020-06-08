import Layout from '@/layout'

export default {
    path: '/log',
    component: Layout,
    redirect: '/log/login/list',
    name: 'log',
    meta: {
        title: '日志管理',
        icon: 'log',
        auth: ['login_log.browse', 'operating_log.browse']
    },
    children: [
        {
            path: 'login/list',
            name: 'loginLogList',
            component: () => import(/* webpackChunkName: 'log' */ '@/views/log/login.list'),
            meta: {
                title: '登录日志',
                auth: ['login_log.browse']
            }
        },
        {
            path: 'operating/list',
            name: 'operatingLogList',
            component: () => import(/* webpackChunkName: 'log' */ '@/views/log/operating.list'),
            meta: {
                title: '操作日志',
                auth: ['operating_log.browse']
            }
        }
    ]
}
