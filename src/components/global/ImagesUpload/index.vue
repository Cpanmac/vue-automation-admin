<template>
    <div>
        <ImageUpload
            v-for="(item, index) in images"
            :key="index"
            :url.sync="images[index]"
            :name="name"
            :data="data"
            :module="module"
            :size="size"
            :width="width"
            :height="height"
            :placeholder="placeholder"
            :ext="ext"
            notip
            @onSuccess="onSuccess($event, index)"
        />
        <div v-if="!notip" class="tip">只能上传 {{ ext.join(' / ') }} 文件，且不超过 {{ size }}MB</div>
    </div>
</template>

<script>
export default {
    name: 'ImagesUpload',
    props: {
        name: {
            type: String,
            default: 'file'
        },
        module: {
            type: String,
            default: 'MEMBER'
        },
        size: {
            type: Number,
            default: 2
        },
        images: {
            type: Array,
            default: () => {
                return []
            }
        },
        width: {
            type: Number,
            default: 150
        },
        height: {
            type: Number,
            default: 150
        },
        placeholder: {
            type: String,
            default: ''
        },
        data: {
            type: Object,
            default: () => {
                return {}
            }
        },
        notip: {
            type: Boolean,
            default: false
        },
        ext: {
            type: Array,
            default: () => {
                return ['jpg', 'png']
            }
        }
    },
    methods: {
        onSuccess(res, index) {
            this.$emit('onSuccess', res, index)
        }
    }
}
</script>

<style lang="scss" scoped>
.image-uploader {
    margin-right: 20px;
}
.tip {
    font-size: 12px;
    color: #606266;
    line-height: 40px;
}
</style>
