/**
 * 存放全局公用状态
 */
import setting from '@/setting'

function hasPermission(permissions, route) {
    if (route.meta && route.meta.auth) {
        return permissions.some(auth => {
            if (typeof route.meta.auth == 'string') {
                return route.meta.auth === auth
            } else {
                return route.meta.auth.some(routeAuth => {
                    return routeAuth === auth
                })
            }
        })
    } else {
        return true
    }
}

function filterAsyncRoutes(routes, permissions) {
    const res = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(permissions, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, permissions)
            }
            res.push(tmp)
        }
    })
    return res
}

const state = {
    openPermission: setting.openPermission,
    showHeader: setting.showHeader,
    showCopyright: setting.showCopyright,
    // 如果未开启 openPermission 则 permissionInit 和 permissions 参数不会使用到
    permissionInit: false,
    permissions: [],
    // 如果未开启 showHeader 则 allRoutes 和 headerNavActive 参数不会使用到
    allRoutes: [],
    headerNavActive: 0,
    // 侧边栏导航，通过路由自动生成
    sidebarRoutes: []
}

const getters = {
    hasPermission: state => permissions => {
        return state.permissions.some(v => {
            return v === permissions
        })
    }
}

const actions = {
    // 获取我的权限
    getPermissions({rootState, commit}) {
        return new Promise(resolve => {
            // 模拟权限数据
            let permissions
            if (rootState.token.account == 'yiwang') {
                permissions = [
                    'banner.browse',
                    'banner.create',
                    'banner.edit',
                    'news.browse',
                    'news.create',
                    'news_category.browse'
                ]
            } else {
                permissions = [
                    'brand.browse',
                    'brand.create',
                    'brand.edit',
                    'login_log.browse',
                    'operating_log.browse'
                ]
            }
            commit('setPermissions', permissions)
            resolve(permissions)
        })
    },
    // 根据权限动态生成路由
    generateRoutes({state, dispatch, commit}, data) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async resolve => {
            let accessedRoutes
            // 判断权限功能是否开启
            if (state.openPermission) {
                const permissions = await dispatch('getPermissions')
                accessedRoutes = filterAsyncRoutes(data.asyncRoutes, permissions)
                for (let i in accessedRoutes) {
                    if (!accessedRoutes[i].children.length) {
                        accessedRoutes.splice(i, 1)
                    }
                }
            } else {
                accessedRoutes = data.asyncRoutes
            }
            commit('setRoutes', {
                routes: accessedRoutes,
                currentPath: data.currentPath
            })
            let routes = []
            if (state.showHeader) {
                accessedRoutes.map(item => {
                    routes.push(item.children)
                })
                routes = routes.flat()
            } else {
                routes = accessedRoutes
            }
            resolve(routes)
        })
    }
}

const mutations = {
    setPermissions(state, permissions) {
        state.permissions = permissions
    },
    setRoutes(state, data) {
        state.permissionInit = true
        if (state.showHeader) {
            state.allRoutes = JSON.parse(JSON.stringify(data.routes))
            data.routes.map((item, index) => {
                if (item.children.some(r => data.currentPath.indexOf(r.path) === 0)) {
                    state.headerNavActive = index
                }
            })
            state.sidebarRoutes = state.allRoutes[state.headerNavActive].children
        } else {
            state.sidebarRoutes = JSON.parse(JSON.stringify(data.routes))
        }
    },
    switchHeader(state, index) {
        state.headerNavActive = index
        state.sidebarRoutes = state.allRoutes[index].children
    },
    invalidRoutes(state) {
        state.permissionInit = false
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
