<template>
    <div>
        <page-main>
            <div>当前 badge 值：{{ $store.state.menuBadge.dot }}</div>
            <el-button @click="change">切换</el-button>
        </page-main>
    </div>
</template>

<script>
export default {
    methods: {
        change() {
            this.$store.commit('menuBadge/switchDot')
        }
    }
}
</script>
