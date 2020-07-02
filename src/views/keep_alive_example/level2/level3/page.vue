<template>
    <div>
        <page-main>
            <el-input-number v-model="num" />
            <el-button @click="go">进入上级路由页面</el-button>
            <el-button @click="go2">进入上级路由页面2</el-button>
        </page-main>
    </div>
</template>

<script>
export default {
    name: 'KeepAliveExamplePage2',
    props: {},
    data() {
        return {
            num: 1
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$store.commit('keepAlive/add', 'KeepAliveLayout')
            vm.$store.commit('keepAlive/add', 'KeepAliveExamplePage2')
        })
    },
    beforeRouteLeave(to, from, next) {
        if (!['keepAliveExamplePage1', 'keepAliveExamplePage'].includes(to.name)) {
            this.$store.commit('keepAlive/remove', 'KeepAliveLayout')
            this.$store.commit('keepAlive/remove', 'KeepAliveExamplePage2')
        }
        next()
    },
    created() {},
    mounted() {},
    methods: {
        go() {
            this.$router.push({
                name: 'keepAliveExamplePage1'
            })
        },
        go2() {
            this.$router.push({
                name: 'keepAliveExamplePage'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
// scss
</style>
