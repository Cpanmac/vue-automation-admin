<template>
    <div>
        <page-header title="同级/下级路由" content="可以结合路由配置文件理解" />
        <page-main>
            <div class="block">
                <el-switch v-model="openKeepAlive" active-text="开启缓存" inactive-text="关闭缓存" />
            </div>
            <div class="block">
                <el-input-number v-model="num" />
            </div>
            <div class="block">
                <el-button @click="go(1)">进入同级路由页面</el-button>
                <el-button @click="go(2)">进入下级路由页面</el-button>
            </div>
        </page-main>
    </div>
</template>

<script>
export default {
    name: 'KeepAliveExamplePage',
    props: {},
    data() {
        return {
            openKeepAlive: false,
            num: 1
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.openKeepAlive) {
            // 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存
            // 所以下面的代码意思就是，如果目标路由的 name 是 keepAliveExampleDetail 则将当前页面的 name 信息存入 keep-alive 全局状态
            if (['keepAliveExampleDetail', 'keepAliveExampleDetail2'].includes(to.name)) {
                // 注意：上面的 keepAliveExampleDetail 是路由的 name ，下面的 KeepAliveExamplePage 是当前页面的 name
                this.$store.commit('keepAlive/add', 'KeepAliveExamplePage')
            }
        } else {
            this.$store.commit('keepAlive/clean')
        }
        next()
    },
    created() {},
    mounted() {},
    methods: {
        go(type) {
            this.$router.push({
                name: type === 1 ? 'keepAliveExampleDetail' : 'keepAliveExampleDetail2'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
    margin-bottom: 10px;
}
</style>
