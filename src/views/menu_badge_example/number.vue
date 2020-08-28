<template>
    <div>
        <page-main>
            <div>当前 badge 值：{{ $store.state.menuBadge.number }}</div>
            <el-button icon="el-icon-plus" @click="plus">1</el-button>
            <el-button icon="el-icon-minus" @click="minus">1</el-button>
        </page-main>
    </div>
</template>

<script>
export default {
    methods: {
        plus() {
            this.$store.commit('menuBadge/setNumber', this.$store.state.menuBadge.number + 1)
        },
        minus() {
            this.$store.commit('menuBadge/setNumber', this.$store.state.menuBadge.number - 1)
        }
    }
}
</script>
