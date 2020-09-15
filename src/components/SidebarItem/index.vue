<template>
    <div v-if="item.meta.sidebar !== false">
        <router-link v-if="!hasChildren" v-slot="{ href, route, navigate, isActive, isExactActive }" :to="resolvePath(item.path)">
            <a :href="isExternal(resolvePath(item.path)) ? resolvePath(item.path) : href" :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" :target="isExternal(resolvePath(item.path)) ? '_blank' : '_self'" @click="navigate">
                <el-menu-item :title="item.meta.title" :index="resolvePath(item.path)">
                    <svg-icon v-if="item.meta.icon" :name="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                    <span v-if="badge(item.meta.badge).visible" :class="{
                        'badge': true,
                        'badge-dot': badge(item.meta.badge).type == 'dot',
                        'badge-text': badge(item.meta.badge).type == 'text'
                    }"
                    >{{ badge(item.meta.badge).value }}</span>
                </el-menu-item>
            </a>
        </router-link>
        <el-submenu v-else :title="item.meta.title" :index="resolvePath(item.path)">
            <template slot="title">
                <svg-icon v-if="item.meta.icon" :name="item.meta.icon" />
                <span>{{ item.meta.title }}</span>
                <span v-if="badge(item.meta.badge).visible" :class="{
                    'badge': true,
                    'badge-text': badge(item.meta.badge).type == 'text',
                    'badge-dot': badge(item.meta.badge).type == 'dot'
                }"
                >{{ badge(item.meta.badge).value }}</span>
            </template>
            <SidebarItem v-for="route in item.children" :key="route.path" :item="route" :base-path="resolvePath(item.path)" />
        </el-submenu>
    </div>
</template>

<script>
import path from 'path'

export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    computed: {
        hasChildren() {
            let flag = true
            if (this.item.children) {
                if (this.item.children.every(item => item.meta.sidebar === false)) {
                    flag = false
                }
            } else {
                flag = false
            }
            return flag
        }
    },
    created() {},
    mounted() {},
    methods: {
        isExternal(path) {
            return /^(https?:|mailto:|tel:)/.test(path)
        },
        resolvePath(routePath) {
            if (this.isExternal(routePath)) {
                return routePath
            }
            if (this.isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        },
        badge(badge) {
            let res = {
                type: '', // text or dot
                value: '',
                visible: false
            }
            if (badge) {
                res.visible = true
                res.value = typeof badge == 'function' ? badge() : badge
                if (typeof res.value == 'boolean') {
                    res.type = 'dot'
                    if (!res.value) {
                        res.visible = false
                    }
                } else if (typeof res.value == 'number') {
                    res.type = 'text'
                    if (res.value <= 0) {
                        res.visible = false
                    }
                } else {
                    res.type = 'text'
                    if (!res.value) {
                        res.visible = false
                    }
                }
            }
            return res
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item,
::v-deep .el-menu-item span,
::v-deep .el-submenu__title,
::v-deep .el-submenu__title span {
    vertical-align: inherit;
    @include text-overflow;
}
::v-deep .el-submenu,
::v-deep .el-menu-item {
    .el-menu {
        .el-submenu .el-submenu__title,
        .el-menu-item {
            background-color: $g-sub-sidebar-bg - 20 !important;
            &:hover {
                background-color: $g-sub-sidebar-bg - 40 !important;
            }
            &.is-active {
                background-color: $g-sub-sidebar-menu-active-bg !important;
            }
        }
    }
    &.is-active {
        background-color: $g-sub-sidebar-menu-active-bg !important;
    }
    .svg-icon {
        font-size: 20px;
        margin-right: 10px;
        vertical-align: -0.25em;
    }
}
a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
.badge {
    position: absolute;
    z-index: 1;
    background-color: $g-badge-bg;
    @include position-center(y);
    &-dot {
        right: 15px;
        text-indent: -9999px;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        box-shadow: 0 0 0 1px $g-badge-border-color;
    }
    &-text {
        right: 15px;
        border-radius: 10px;
        color: $g-badge-color;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
        box-shadow: 0 0 0 1px $g-badge-border-color;
    }
}
.el-submenu__title {
    > .badge {
        &-dot {
            right: 40px;
        }
        &-text {
            right: 40px;
        }
    }
}
</style>
