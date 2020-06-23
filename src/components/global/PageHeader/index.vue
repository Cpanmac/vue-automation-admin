<template>
    <div class="header">
        <div class="title">{{ title }}</div>
        <div v-if="content" class="content">{{ content }}</div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 20px;
    padding: 16px 20px 0;
    background: #fff;
    border-bottom: 1px solid #e8eaec;
    .title {
        font-size: 22px;
        margin-bottom: 16px;
    }
    .content {
        color: #909399;
        font-size: 14px;
        margin-bottom: 16px;
    }
}
</style>
