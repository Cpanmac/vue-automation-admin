<template>
    <div>
        <div v-for="(item, index) in url" :key="index" class="images">
            <el-image v-if="index < max" :src="item" :style="`width:${width}px;height:${height}px;`" fit="fill" />
            <div class="mask">
                <span title="预览" @click="preview(index)">
                    <i class="el-icon-zoom-in" />
                </span>
                <span title="删除" @click="remove(index)">
                    <i class="el-icon-delete" />
                </span>
            </div>
        </div>
        <el-upload
            v-show="url.length < max"
            :show-file-list="false"
            :headers="headers"
            :action="action"
            :data="data"
            :name="name"
            :before-upload="beforeUpload"
            :on-progress="onProgress"
            :on-success="onSuccess"
            drag
            class="images-upload"
        >
            <div class="image-slot" :style="`width:${width}px;height:${height}px;`">
                <i class="el-icon-plus" />
            </div>
            <div v-show="progress.percent" class="progress" :style="`width:${width}px;height:${height}px;`">
                <el-image :src="progress.preview" :style="`width:${width}px;height:${height}px;`" fit="fill" />
                <el-progress type="circle" :width="Math.min(width, height) * 0.8" :percentage="progress.percent" />
            </div>
        </el-upload>
        <div v-if="!notip" class="el-upload__tip">支持上传 {{ ext.join(' / ') }} 文件，且不超过 {{ size }}MB</div>
        <el-dialog :visible.sync="dialogVisible" title="预览" width="800px">
            <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto;">
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'ImagesUpload',
    props: {
        action: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: 'file'
        },
        url: {
            type: Array,
            default: () => []
        },
        max: {
            type: Number,
            default: 3
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
        size: {
            type: Number,
            default: 2
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
            dialogImageUrl: '',
            dialogVisible: false,
            progress: {
                preview: '',
                percent: 0
            }
        }
    },
    methods: {
        preview(index) {
            this.dialogImageUrl = this.url[index]
            this.dialogVisible = true
        },
        remove(index) {
            this.url.splice(index, 1)
            this.$emit('update:url', this.url)
        },
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
            if (res.error == '') {
                this.url.push(res.data.url[0])
                this.$emit('update:url', this.url)
            } else {
                this.$message.warning(res.error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.images {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
    .el-image {
        display: block;
    }
    .mask {
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        transition: all 0.3s;
        span {
            margin: 0 10px;
            cursor: pointer;
        }
    }
    &:hover .mask {
        opacity: 1;
    }
}
.images-upload {
    display: inline-block;
}
/deep/ .el-upload {
    .el-upload-dragger {
        width: auto;
        height: auto;
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
</style>
