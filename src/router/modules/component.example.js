import Layout from '@/layout'

export default {
    path: '/component_example',
    component: Layout,
    redirect: '/component_example/editor',
    name: 'componentExample',
    meta: {
        title: '组件演示',
        icon: 'component'
    },
    children: [
        {
            path: 'editor',
            name: 'componentExampleEditor',
            component: () => import(/* webpackChunkName: 'component_example' */ '@/views/component_example/editor'),
            meta: {
                title: '编辑器'
            }
        },
        {
            path: 'result',
            name: 'componentExampleResult',
            component: () => import(/* webpackChunkName: 'component_example' */ '@/views/component_example/result'),
            meta: {
                title: '处理结果'
            }
        },
        {
            path: 'actionbar',
            name: 'componentExampleActionbar',
            component: () => import(/* webpackChunkName: 'component_example' */ '@/views/component_example/actionbar'),
            meta: {
                title: '固定底部操作栏'
            }
        },
        {
            path: 'searchbar',
            name: 'componentExampleSearchbar',
            component: () => import(/* webpackChunkName: 'component_example' */ '@/views/component_example/searchbar'),
            meta: {
                title: '搜索栏'
            }
        }
    ]
}
