<template>
    <div class="actionbar">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'FixedActionBar'
}
</script>

<style lang="scss" scoped>
.actionbar {
    position: fixed;
    left: $g-sidebar-width;
    right: 0;
    bottom: 0;
    z-index: 4;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 -1px 4px rgba(0, 21, 41, 0.08);
}
/deep/ .el-form-item {
    margin-bottom: 0;
}
</style>
