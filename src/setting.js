export default {
    /**
     * 是否开启权限功能，权限功能提供以下鉴权支持：
     * 1、路由鉴权
     * 2、鉴权组件：<Auth></Auth>、<AuthAll></AuthAll>
     * 3、鉴权指令：v-auth、v-auth-all
     * 4、鉴权函数：this.$auth()、this.$authAll()
     */
    openPermission: false,
    // 是否显示头部
    showHeader: false,
    // 是否显示底部版权信息
    showCopyright: true,
    // 版权信息配置，格式为：Copyright © [dates] <company>
    copyrightDates: '2020',
    copyrightCompany: '浙江易网科技股份有限公司',
    copyrightWebsite: 'http://1one.cn/',
    // 是否开启导航搜索
    enableNavSearch: true,
    // 是否开启载入进度条
    enableProgress: true,
    // 是否开启动态标题
    dynamicTitle: false,
    // 是否开启控制台
    enableDashboard: true,
    // 是否开启主题配置（建议在生产环境关闭）
    enableThemeSetting: true
}
