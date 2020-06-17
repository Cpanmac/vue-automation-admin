<template>
    <el-upload
        :show-file-list="false"
        :action="action"
        :data="myData"
        :name="name"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        drag
        class="image-uploader"
    >
        <el-image :src="url === '' ? placeholder : url" :style="`width:${width}px;height:${height}px;`" fit="fill">
            <div slot="error" class="image-slot">
                <i class="el-icon-plus" />
            </div>
        </el-image>
        <div v-if="!notip" slot="tip" class="el-upload__tip">只能上传 {{ ext.join(' / ') }} 文件，且不超过 {{ size }}MB</div>
    </el-upload>
</template>

<script>
export default {
    name: 'ImageUpload',
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
        url: {
            type: String,
            default: ''
        },
        view: {
            type: String,
            default: ''
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
                return ['jpg', 'png', 'gif']
            }
        }
    },
    data() {
        return {
            action: `${process.env.VUE_APP_FILE_API}upload/upload`
        }
    },
    computed: {
        myData() {
            return Object.assign({
                module: this.module,
                type: 'IMAGE',
                token: this.$store.state.admin.token
            }, this.data)
        }
    },
    methods: {
        beforeUpload(file) {
            const fileName = file.name.split('.')
            const fileExt = fileName[fileName.length - 1]
            const isTypeOk = this._.indexOf(this.ext, fileExt) >= 0
            const isSizeOk = file.size / 1024 / 1024 < this.size
            if (!isTypeOk) {
                this.$message.error('请上传图片类型文件！')
            }
            if (!isSizeOk) {
                this.$message.error(`上传图片大小不能超过 ${this.size}MB！`)
            }
            return isTypeOk && isSizeOk
        },
        onSuccess(res, file) {
            URL.createObjectURL(file.raw)
            this.$emit('update:url', res.data.url[0])
            this.$emit('onSuccess', res)
        }
    }
}
</script>

<style lang="scss" scoped>
.image-uploader {
    line-height: normal;
    display: inline-block;
    vertical-align: top;
    /deep/ .el-upload {
        .el-upload-dragger {
            width: auto;
            height: auto;
            .el-image {
                display: block;
                .image-slot {
                    background-color: transparent;
                }
            }
        }
    }
}
</style>
