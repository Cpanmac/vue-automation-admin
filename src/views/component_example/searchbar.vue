<template>
    <div>
        <page-main>
            <search-bar show-more @toggle="searchMore = !searchMore">
                <el-form :model="search" size="small" label-width="120px">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="姓名 / 手机号">
                                <el-input v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable @keyup.enter.native="getDataList" @clear="getDataList" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item v-auth="'supplay.department.browse'" label="部门">
                                <el-select v-model="search.department_id" clearable placeholder="请选择部门" @change="onDepartmentChange">
                                    <el-option v-for="item in departmentList" :key="item.value" :label="item.label" :value="item.value" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item v-auth="'supplay.department_job.browse'" label="职位">
                                <el-select v-model="search.department_job_id" clearable placeholder="请选择职位" no-data-text="请先选择部门">
                                    <el-option v-for="item in departmentJobList" :key="item.value" :label="item.label" :value="item.value" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item v-auth="'supplay.role.browse'" label="角色">
                                <el-select v-model="search.role_id" clearable placeholder="请选择角色">
                                    <el-option v-for="item in roleList" :key="item.value" :label="item.label" :value="item.value" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row v-show="searchMore">
                        <el-col :span="24">
                            <el-form-item label="角色">
                                <el-checkbox v-model="checked">备选项</el-checkbox>
                                <el-checkbox v-model="checked">备选项</el-checkbox>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search">筛选</el-button>
                        <el-button>导出</el-button>
                        <el-button type="text">查看已导出记录</el-button>
                    </el-form-item>
                </el-form>
            </search-bar>
        </page-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchMore: false,
            search: {
                name: '',
                department_id: '',
                department_job_id: '',
                role_id: ''
            }
        }
    }
}
</script>
