import Layout from '@/layout'

export default {
    path: '/brand',
    component: Layout,
    redirect: '/brand/list',
    name: 'brand',
    meta: {
        title: '品牌管理',
        icon: 'brand',
        auth: ['brand.browse']
    },
    children: [
        {
            path: 'list',
            name: 'brandList',
            component: { render: h => h('router-view') },
            redirect: '/brand/list',
            meta: {
                title: '品牌列表',
                auth: ['brand.browse']
            },
            children: [
                {
                    path: '',
                    component: () => import(/* webpackChunkName: 'brand' */ '@/views/brand/list'),
                    meta: {
                        title: '品牌列表',
                        auth: ['brand.browse'],
                        sidebar: false,
                        breadcrumb: false
                    }
                },
                {
                    path: 'detail',
                    name: 'brandCreate',
                    component: () => import(/* webpackChunkName: 'brand' */ '@/views/brand/detail'),
                    meta: {
                        title: '新增品牌',
                        auth: ['brand.create'],
                        sidebar: false,
                        activeMenu: '/brand/list'
                    }
                },
                {
                    path: 'detail/:id',
                    name: 'brandEdit',
                    component: () => import(/* webpackChunkName: 'brand' */ '@/views/brand/detail'),
                    meta: {
                        title: '编辑品牌',
                        auth: ['brand.edit'],
                        sidebar: false
                    }
                }
            ]
        }
    ]
}
