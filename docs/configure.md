# 配置

> 请先阅读 vue-automation 的[配置](http://eoner.gitee.io/vue-automation/#/configure)章节

模版的配置存放在 `src/setting.js` 文件里，如下：

```js
export default {
    // 是否开启权限功能
    openPermission: false,
    // 是否显示头部
    showHeader: false,
    // 是否显示版权信息
    showCopyright: true,
    // 版权信息配置，格式为：Copyright © [dates] <company>
    copyrightDates: '2020',
    copyrightCompany: '浙江易网科技股份有限公司',
    copyrightWebsite: 'http://1one.cn/',
    // 是否开启动态标题
    dynamicTitle: false
}
```

其中是否开启权限功能和是否显示头部，分别在[路由](router)和[布局](layout)章节有详细介绍。