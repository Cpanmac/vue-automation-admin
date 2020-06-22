<template>
    <el-upload
        :show-file-list="false"
        :headers="headers"
        :action="action"
        :data="myData"
        :name="name"
        :before-upload="beforeUpload"
        :on-progress="onProgress"
        :on-success="onSuccess"
        drag
        class="image-uploader"
    >
        <el-image :src="url === '' ? placeholder : url" :style="`width:${width}px;height:${height}px;`" fit="fill">
            <div slot="error" class="image-slot">
                <i class="el-icon-plus" />
            </div>
        </el-image>
        <div v-show="progress.percent" class="progress" :style="`width:${width}px;height:${height}px;`">
            <el-image :src="progress.preview" :style="`width:${width}px;height:${height}px;`" fit="fill" />
            <el-progress type="circle" :width="Math.min(width, height) * 0.8" :percentage="progress.percent" />
        </div>
        <div v-if="!notip" slot="tip" class="el-upload__tip">支持上传 {{ ext.join(' / ') }} 文件，且不超过 {{ size }}MB</div>
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
        headers: {
            type: Object,
            default: () => {
                return {}
            }
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
                return ['jpg', 'png', 'gif', 'bmp']
            }
        }
    },
    data() {
        return {
            action: `${process.env.VUE_APP_API_ROOT}upload/upload`,
            progress: {
                preview: '',
                percent: 0
            }
        }
    },
    computed: {
        myData() {
            return Object.assign({
                module: this.module,
                type: 'IMAGE',
                token: 'TKD622955070740951'
            }, this.data)
        }
    },
    methods: {
        beforeUpload(file) {
            const fileName = file.name.split('.')
            const fileExt = fileName[fileName.length - 1]
            const isTypeOk = this.ext.indexOf(fileExt) >= 0
            const isSizeOk = file.size / 1024 / 1024 < this.size
            if (!isTypeOk) {
                this.$message.error('请上传图片类型文件！')
            }
            if (!isSizeOk) {
                this.$message.error(`上传图片大小不能超过 ${this.size}MB！`)
            }
            if (isTypeOk && isSizeOk) {
                this.progress.preview = URL.createObjectURL(file)
            }
            return isTypeOk && isSizeOk
        },
        onProgress(file) {
            this.progress.percent = ~~file.percent
            if (this.progress.percent == 100) {
                setTimeout(() => {
                    this.progress.preview = ''
                    this.progress.percent = 0
                }, 1000)
            }
        },
        onSuccess(res) {
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    color: #909399;
                    font-size: 30px;
                    background-color: transparent;
                }
            }
            .progress {
                position: absolute;
                top: 0;
                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background-color: rgba(0, 0, 0, 0.2);
                }
                .el-progress {
                    z-index: 1;
                    @include position-center(xy);
                    .el-progress__text {
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
