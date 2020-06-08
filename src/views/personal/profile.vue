<template>
    <div class="app-container">
        <el-row>
            <el-col :md="24" :lg="12">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="头像">
                        <el-avatar :src="form.headimg" />
                        <el-button size="small" style="margin-left: 10px;" @click="avatarUploadView = true">上传头像</el-button>
                        <avatarUpload
                            v-model="avatarUploadView"
                            field="file"
                            :url="avatarUrl"
                            :params="avatarParams"
                            :width="100"
                            :height="100"
                            @crop-upload-success="avatarUploadSuccess"
                        />
                    </el-form-item>
                    <el-form-item label="账号">
                        {{ form.account }}
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="form.mobile" />
                    </el-form-item>
                    <el-form-item label="QQ">
                        <el-input v-model="form.qq" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import avatarUpload from 'vue-image-crop-upload'

export default {
    components: {
        avatarUpload
    },
    data() {
        return {
            form: {
                headimg: '',
                account: '',
                mobile: '',
                name: '',
                qq: ''
            },
            avatarUrl: `${process.env.VUE_APP_FILE_API}upload/upload`,
            avatarParams: {
                module: 'MEMBER',
                type: 'IMAGE',
                token: this.$store.state.token.token
            },
            avatarUploadView: false
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        getInfo() {
            this.$api.get('admin/info').then(res => {
                this.form.headimg = res.data.headimg
                this.form.account = res.data.account
                this.form.mobile = res.data.mobile
                this.form.name = res.data.name
                this.form.qq = res.data.qq
            })
        },
        avatarUploadSuccess(jsonData) {
            this.form.headimg = jsonData.data.url[0]
        },
        onSubmit() {
            this.$api.post('admin/edit', this.form).then(() => {
                this.$message({
                    type: 'success',
                    message: '编辑成功'
                })
                this.$store.dispatch('admin/getInfo')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.el-avatar {
    vertical-align: middle;
}
</style>
