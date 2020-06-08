import Layout from '@/layout'

export default {
    path: '/news',
    component: Layout,
    redirect: '/news/list',
    name: 'news',
    meta: {
        title: '新闻管理',
        icon: 'news',
        auth: ['news.browse']
    },
    children: [
        {
            path: 'category',
            component: { render: h => h('router-view') },
            redirect: '/news/category/list',
            name: 'newsCategory',
            meta: {
                title: '分类管理',
                auth: ['news_category.browse']
            },
            children: [
                {
                    path: 'list',
                    name: 'newsCategoryList',
                    component: () => import(/* webpackChunkName: 'news' */ '@/views/news_category/list'),
                    meta: {
                        title: '分类列表',
                        auth: ['news_category.browse']
                    }
                },
                {
                    path: 'detail',
                    name: 'newsCategoryCreate',
                    component: () => import(/* webpackChunkName: 'news' */ '@/views/news_category/detail'),
                    meta: {
                        title: '新增分类',
                        sidebar: false,
                        auth: ['news_category.create']
                    }
                },
                {
                    path: 'detail/:id',
                    name: 'newsCategoryEdit',
                    component: () => import(/* webpackChunkName: 'news' */ '@/views/news_category/detail'),
                    meta: {
                        title: '编辑分类',
                        sidebar: false,
                        auth: ['news_category.edit']
                    }
                }
            ]
        },
        {
            path: 'list',
            name: 'newsList',
            component: () => import(/* webpackChunkName: 'news' */ '@/views/news/list'),
            meta: {
                title: '新闻列表',
                auth: ['news.browse']
            }
        },
        {
            path: 'detail',
            name: 'newsCreate',
            component: () => import(/* webpackChunkName: 'news' */ '@/views/news/detail'),
            meta: {
                title: '新增新闻',
                auth: ['news.create'],
                sidebar: false
            }
        },
        {
            path: 'detail/:id',
            name: 'newsEdit',
            component: () => import(/* webpackChunkName: 'news' */ '@/views/news/detail'),
            meta: {
                title: '编辑新闻',
                auth: ['news.edit'],
                sidebar: false
            }
        }
    ]
}
