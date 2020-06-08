<template>
    <div id="app-main">
        <header v-if="$store.state.global.showHeader">
            <div class="header-container">
                <Logo />
                <div class="nav">
                    <template v-for="(item, index) in $store.state.global.allRoutes">
                        <div v-if="item.children && item.children.length !== 0" :key="index" :class="'item ' + (index == $store.state.global.headerNavActive ? 'active' : '')" @click="$store.commit('global/switchHeader', index)">
                            <svg-icon v-if="item.meta.icon" :name="item.meta.icon" />
                            <span>{{ item.meta.title }}</span>
                        </div>
                    </template>
                </div>
            </div>
            <UserMenu />
        </header>
        <div class="wrapper">
            <div class="sidebar-container">
                <Logo />
                <el-menu :background-color="variables.g_sidebar_bg" :text-color="variables.g_sidebar_menu_color" :active-text-color="variables.g_sidebar_menu_active_color" unique-opened :default-active="activeMenu">
                    <transition-group name="sidebar">
                        <SidebarItem v-for="route in $store.state.global.sidebarRoutes" :key="route.path" :item="route" :base-path="route.path" />
                    </transition-group>
                </el-menu>
            </div>
            <div class="main-container">
                <div class="breadcrumb-container">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <transition-group name="breadcrumb">
                            <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
                        </transition-group>
                    </el-breadcrumb>
                    <UserMenu />
                </div>
                <div class="main">
                    <transition name="main" mode="out-in">
                        <RouterView />
                    </transition>
                </div>
                <Copyright v-if="$store.state.global.showCopyright" />
            </div>
        </div>
    </div>
</template>

<script>
import SidebarItem from './sidebarItem'
import variables from '@/assets/styles/resources/variables.scss'

export default {
    components: {
        SidebarItem
    },
    data() {
        return {
            breadcrumbList: [],
            routePath: ''
        }
    },
    computed: {
        variables() {
            return variables
        },
        activeMenu() {
            return this.$route.meta.activeMenu ? this.$route.meta.activeMenu : this.$route.path
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    mounted() {
        this.getBreadcrumb()
    },
    methods: {
        // 根据路由匹配规则，显示面包屑导航
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
            if (!(matched[0].name == 'dashboard' && matched[0].path == '/dashboard')) {
                matched = [{ path: '/dashboard', meta: { title: '控制台' }}].concat(matched)
            }
            this.breadcrumbList = matched
        }
    }
}
</script>

<style lang="scss" scoped>
#app-main {
    min-width: 1000px;
    height: 100%;
}
header {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: $g-header-height;
    background-color: $g-header-bg;
    color: #fff;
    .header-container {
        display: flex;
        align-items: center;
    }
    /deep/ .title {
        position: relative;
        width: inherit;
        height: inherit;
        padding: inherit;
        background-color: inherit;
        .logo {
            width: 50px;
            height: 50px;
        }
        span {
            font-size: 24px;
            letter-spacing: 1px;
        }
    }
    .nav {
        display: flex;
        margin-left: 50px;
        .item {
            margin: 0 10px;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            &.active,
            &:hover {
                background-color: $g_header_nav_active_bg;
            }
            .svg-icon {
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }
    .user-container {
        color: #fff;
        font-size: 16px;
    }
}
.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    .sidebar-container {
        position: fixed;
        z-index: 1000;
        top: 0;
        bottom: 0;
        width: $g-sidebar-width;
        background-color: $g-sidebar-bg;
        overflow: auto;
        overscroll-behavior: contain;
        &::-webkit-scrollbar {
            display: none;
        }
        .el-menu {
            border-right: 0;
            padding-top: $g-breadcrumb-height;
        }
    }
    .main-container {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        margin-left: $g-sidebar-width;
        .breadcrumb-container {
            position: fixed;
            z-index: 1000;
            top: 0;
            left: $g-sidebar-width;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            height: $g-breadcrumb-height;
            background-color: #fff;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            /deep/ .el-breadcrumb {
                .el-breadcrumb__item {
                    span {
                        font-weight: normal;
                    }
                    &:last-child span {
                        color: #97a8be;
                    }
                }
            }
        }
        .main {
            flex: auto;
            position: relative;
            padding: calc(#{$g_breadcrumb_height} + 20px) 20px 20px;
            overflow: hidden;
        }
    }
}
header + .wrapper {
    padding-top: $g-header-height;
    .sidebar-container {
        top: $g-header-height;
        .title {
            display: none;
        }
        .el-menu {
            padding-top: 0;
        }
    }
    .main-container {
        .breadcrumb-container {
            top: $g-header-height;
            .user-container {
                display: none;
            }
        }
    }
}

// 侧边栏动画
.sidebar-enter-active {
    transition: all 0.3s;
}
.sidebar-enter,
.sidebar-leave-active {
    opacity: 0;
    transform: translateY(20px);
}
.sidebar-leave-active {
    position: absolute;
}

// 面包屑动画
.breadcrumb-enter-active {
    transition: all 0.3s;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}
.breadcrumb-leave-active {
    position: absolute;
}

// 主内容区动画
.main-enter-active,
.main-leave-active {
    transition: all 0.3s;
}
.main-enter {
    opacity: 0;
    transform: translateX(-20px);
}
.main-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>
