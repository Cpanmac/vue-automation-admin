<template>
    <div>
        <page-main>
            <div>当前 badge 值：'{{ $store.state.menuBadge.text }}'</div>
            <el-button @click="change">切换</el-button>
            <el-button @click="clear">清空</el-button>
        </page-main>
    </div>
</template>

<script>
export default {
    methods: {
        change() {
            this.$store.commit('menuBadge/setText', this.$store.state.menuBadge.text == '热门' ? '促销' : '热门')
        },
        clear() {
            this.$store.commit('menuBadge/setText')
        }
    }
}
</script>
