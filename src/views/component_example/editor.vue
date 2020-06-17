<template>
    <div>
        <editor v-model="form.content" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                content: '<p>初始化文字</p>'
            }
        }
    }
}
</script>
