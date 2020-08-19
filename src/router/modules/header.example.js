import Layout from '@/layout'

export default {
    path: '/header_example',
    component: Layout,
    redirect: '/header_example/index',
    name: 'headerExample',
    meta: {
        title: '布局',
        icon: 'sidebar-layout'
    },
    children: [
        {
            path: 'index',
            name: 'headerExampleIndex',
            component: () => import(/* webpackChunkName: 'header_example' */ '@/views/header_example'),
            meta: {
                title: '测试'
            }
        }
    ]
}
