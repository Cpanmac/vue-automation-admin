<template>
    <div>
        <page-main>
            <el-input-number v-model="num" />
            <el-button @click="go">进入同级其它路由页面</el-button>
        </page-main>
    </div>
</template>

<script>
export default {
    name: 'KeepAliveExamplePage1',
    props: {},
    data() {
        return {
            num: 1
        }
    },
    beforeRouteLeave(to, from, next) {
        if (['keepAliveExamplePage2'].includes(to.name)) {
            this.$store.commit('keepAlive/add', 'KeepAliveExamplePage1')
        }
        if (['keepAliveExamplePage'].includes(to.name)) {
            this.$store.commit('keepAlive/add', 'KeepAliveLayout')
        }
        next()
    },
    created() {},
    mounted() {},
    methods: {
        go() {
            this.$router.push({
                name: 'keepAliveExamplePage2'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
// scss
</style>
