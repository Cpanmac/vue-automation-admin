<template>
    <el-dropdown class="user-container" trigger="click" @command="handleCommand">
        <div class="user-wrapper">
            <el-avatar size="medium" />
            Hooray
            <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item command="dashboard">控制台</el-dropdown-item>
            <el-dropdown-item command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: 'UserMenu',
    methods: {
        handleCommand(command) {
            switch (command) {
                case 'dashboard':
                    this.$router.push({
                        name: 'dashboard'
                    })
                    break
                case 'setting':
                    this.$router.push({
                        name: 'personalSetting'
                    })
                    break
                case 'logout':
                    this.$store.dispatch('token/logout').then(() => {
                        this.$router.push({
                            name: 'login'
                        })
                    })
                    break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.user-container {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    .user-wrapper {
        .el-avatar {
            vertical-align: middle;
            margin-top: -2px;
            margin-right: 4px;
        }
    }
}
</style>
