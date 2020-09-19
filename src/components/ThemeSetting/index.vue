<template>
    <div>
        <el-drawer title="主题配置" :visible.sync="$store.state.global.openTheme" direction="rtl" size="500px">
            <el-alert title="主题配置可实时预览效果，更多设置请在 src/setting.js 中进行设置，建议在生产环境隐藏主题配置功能" type="error" :closable="false" />
            <el-form ref="form" :model="$store.state.global" label-width="100px" size="small">
                <el-form-item label="显示头部">
                    <el-radio-group v-model="$store.state.global.showHeader">
                        <el-radio-button :label="true">显示</el-radio-button>
                        <el-radio-button :label="false">隐藏</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="显示底部版权">
                    <el-radio-group v-model="$store.state.global.showCopyright">
                        <el-radio-button :label="true">显示</el-radio-button>
                        <el-radio-button :label="false">隐藏</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="导航搜索">
                    <el-radio-group v-model="$store.state.global.enableNavSearch">
                        <el-radio-button :label="true">开启</el-radio-button>
                        <el-radio-button :label="false">关闭</el-radio-button>
                    </el-radio-group>
                    <el-alert title="该功能位于页面右上角的搜索按钮，可对全局侧边栏导航快捷搜索" type="info" :closable="false" />
                </el-form-item>
                <el-form-item label="载入进度条">
                    <el-radio-group v-model="$store.state.global.enableProgress">
                        <el-radio-button :label="true">开启</el-radio-button>
                        <el-radio-button :label="false">关闭</el-radio-button>
                    </el-radio-group>
                    <el-alert title="该功能开启时，路由跳转会看到页面顶部有条蓝色的进度条" type="info" :closable="false" />
                </el-form-item>
                <el-form-item label="动态标题">
                    <el-radio-group v-model="$store.state.global.dynamicTitle">
                        <el-radio-button :label="true">开启</el-radio-button>
                        <el-radio-button :label="false">关闭</el-radio-button>
                    </el-radio-group>
                    <el-alert title="该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置" type="info" :closable="false" />
                </el-form-item>
                <el-form-item label="启用控制台">
                    <el-radio-group v-model="$store.state.global.enableDashboard">
                        <el-radio-button :label="true">开启</el-radio-button>
                        <el-radio-button :label="false">关闭</el-radio-button>
                    </el-radio-group>
                    <el-alert title="控制台即欢迎页，该功能开启时，登录成功默认进入控制台；关闭时则默认进入侧边栏导航第一个导航页面" type="info" :closable="false" />
                </el-form-item>
            </el-form>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: 'ThemeSetting',
    props: {},
    data() {
        return {}
    },
    mounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
::v-deep .el-drawer__wrapper,
::v-deep .el-drawer__wrapper * {
    outline: none !important;
}
::v-deep .el-drawer__body {
    padding: 0 20px 20px;
    overflow: auto;
}
.el-form {
    margin-top: 20px;
    .el-alert {
        margin-top: 10px;
        line-height: initial;
    }
}
</style>
