module.exports = {
    description: '创建页面',
    prompts: [
        {
            type: 'input',
            name: 'moduleName',
            message: '请输入模块名(./views/???)'
        },
        {
            type: 'input',
            name: 'name',
            message: '请输入页面名称',
            validate: v => {
                if (!v || v.trim === '') {
                    return '页面名称不能为空'
                } else {
                    return true
                }
            }
        }
    ],
    actions: data => {
        const actions = [
            {
                type: 'add',
                path: `src/views/${data.moduleName}/${data.name}.vue`,
                templateFile: 'plop-templates/page/index.hbs',
                data: {
                    componentName: `${data.moduleName}/${data.name}`
                }
            }
        ]
        return actions
    }
}
