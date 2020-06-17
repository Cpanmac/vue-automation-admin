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
                content: ''
            }
        }
    }
}
</script>
