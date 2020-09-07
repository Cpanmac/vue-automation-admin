import Layout from '@/layout'
import IframeLayout from '@/layout/iframe'

export default {
    path: '/link',
    component: Layout,
    name: 'externalLinkExample',
    meta: {
        title: '官网',
        icon: 'sidebar-external-link'
    },
    children: [
        {
            path: 'iframe',
            component: IframeLayout,
            name: 'linkExampleIframe',
            meta: {
                title: '内嵌网页',
                link: 'https://eoner.gitee.io/vue-automation-admin'
            }
        },
        {
            path: 'https://eoner.gitee.io/vue-automation-admin',
            meta: {
                title: '新窗口打开'
            }
        }
    ]
}
