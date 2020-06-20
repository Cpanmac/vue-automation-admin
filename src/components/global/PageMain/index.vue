<template>
    <div class="main">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PageMain'
}
</script>

<style lang="scss" scoped>
.main {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
}
</style>
