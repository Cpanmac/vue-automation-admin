# 组件

> 请先阅读 vue-automation 的[全局组件](https://eoner.gitee.io/vue-automation/#/global-component)章节

除了 Element UI 提供的组件外，模版另外封装的一些常用的全局组件。

## AmapMarker 高地地图点坐标

### Props

| 参数   | 说明     | 类型            | 可选值 | 默认值 |
| :----- | :------- | :-------------- | :----- | :----- |
| v      | 版本号   | string          | -      | 1.4.15 |
| appkey | 应用key  | string          | -      | -      |
| height | 展示高度 | number / string | -      | 500    |
| lnglat | 经纬度   | array           | -      | []     |

## BatchActionBar 批量操作栏

### Props

| 参数          | 说明           | 类型  | 可选值 | 默认值 |
| :------------ | :------------- | :---- | :----- | :----- |
| data          | 列表完整数据源 | array | -      | []     |
| selectionData | 勾选列表数据源 | array | -      | []     |

### Slot

| name | 说明         |
| :--- | :----------- |
| -    | 批量操作按钮 |

## CascaderArea 省市区联动

### Props

| 参数     | 说明                                               | 类型    | 可选值                | 默认值 |
| :------- | :------------------------------------------------- | :------ | :-------------------- | :----- |
| value    | 选中项绑定值，例如：['河北省', '唐山市', '市辖区'] | Array   | -                     | []     |
| size     | 尺寸                                               | string  | medium / small / mini | -      |
| disabled | 是否禁用                                           | boolean | -                     | false  |

## Editor 编辑器

### Props

| 参数     | 说明                           | 类型    | 可选值 | 默认值 |
| :------- | :----------------------------- | :------ | :----- | :----- |
| value    | 数据内容                       | string  | -      | -      |
| setting  | 编辑器配置项，具体参考 tinymce | object  | -      | -      |
| disabled | 是否禁用                       | boolean | -      | false  |

## FileUpload 文件上传

### Props

| 参数    | 说明                                                                         | 类型    | 可选值 | 默认值         |
| :------ | :--------------------------------------------------------------------------- | :------ | :----- | :------------- |
| action  | 必选参数，上传的地址                                                         | string  | -      | -              |
| headers | 设置上传的请求头部                                                           | object  | -      | -              |
| data    | 上传时附带的额外参数                                                         | object  | -      | -              |
| name    | 上传的文件字段名                                                             | string  | -      | file           |
| size    | 上传文件大小限制，单位为MB                                                   | number  | -      | 2              |
| max     | 上传数量限制                                                                 | number  | -      | 3              |
| files   | 上传的文件列表，例如：[{name: 'xxx.jpg', url: 'http://xxx.cdn.com/xxx.jpg'}] | array   | -      | []             |
| notip   | 是否隐藏提示栏                                                               | boolean | -      | false          |
| ext     | 支持的文件类型                                                               | array   | -      | ['zip', 'rar'] |

## FixedActionBar 固定底部操作栏

### Slot

| name | 说明     |
| :--- | :------- |
| -    | 操作按钮 |

## ImagePreview 图片预览

### Props

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| :----- | :------- | :----- | :----- | :----- |
| src    | 图片链接 | string | -      | -      |
| width  | 展示宽度 | string | -      | -      |
| height | 展示高度 | string | -      | -      |

## ImagesUpload 多图上传

### Props

| 参数        | 说明                       | 类型    | 可选值 | 默认值                       |
| :---------- | :------------------------- | :------ | :----- | :--------------------------- |
| action      | 必选参数，上传的地址       | string  | -      | -                            |
| headers     | 设置上传的请求头部         | object  | -      | -                            |
| data        | 上传时附带的额外参数       | object  | -      | -                            |
| name        | 上传的文件字段名           | string  | -      | file                         |
| url         | 上传的图片列表             | array   | -      | []                           |
| max         | 上传数量限制               | number  | -      | 3                            |
| size        | 上传文件大小限制，单位为MB | number  | -      | 2                            |
| width       | 展示宽度                   | number  | -      | 150                          |
| height      | 展示高度                   | number  | -      | 150                          |
| placeholder | 占位图                     | string  | -      | -                            |
| notip       | 是否隐藏提示栏             | boolean | -      | false                        |
| ext         | 支持的文件类型             | array   | -      | ['jpg', 'png', 'gif', 'bmp'] |

## ImageUpload 单图上传

### Props

| 参数        | 说明                       | 类型    | 可选值 | 默认值                       |
| :---------- | :------------------------- | :------ | :----- | :--------------------------- |
| action      | 必选参数，上传的地址       | string  | -      | -                            |
| headers     | 设置上传的请求头部         | object  | -      | -                            |
| data        | 上传时附带的额外参数       | object  | -      | -                            |
| name        | 上传的文件字段名           | string  | -      | file                         |
| url         | 上传的图片地址             | string  | -      | -                            |
| size        | 上传文件大小限制，单位为MB | number  | -      | 2                            |
| width       | 展示宽度                   | number  | -      | 150                          |
| height      | 展示高度                   | number  | -      | 150                          |
| placeholder | 占位图                     | string  | -      | -                            |
| notip       | 是否隐藏提示栏             | boolean | -      | false                        |
| ext         | 支持的文件类型             | array   | -      | ['jpg', 'png', 'gif', 'bmp'] |

## PageHeader 页头

### Props

| 参数    | 说明 | 类型   | 可选值 | 默认值 |
| :------ | :--- | :----- | :----- | :----- |
| title   | 标题 | string | -      | -      |
| content | 内容 | string | -      | -      |

### Slot

| name | 说明     |
| :--- | :------- |
| -    | 右侧区域 |

## PageMain 空白页

### Slot

| name | 说明 |
| :--- | :--- |
| -    | 内容 |

## Result 结果页

### Props

| 参数  | 说明 | 类型   | 可选值                    | 默认值 |
| :---- | :--- | :----- | :------------------------ | :----- |
| type  | 类型 | string | success / warning / error | -      |
| title | 标题 | string | -                         | -      |
| desc  | 说明 | string | -                         | -      |

### Slot

| name  | 说明     |
| :---- | :------- |
| -     | 操作按钮 |
| extra | 额外说明 |

## SearchBar 搜索栏

### Props

| 参数     | 说明               | 类型    | 可选值 | 默认值 |
| :------- | :----------------- | :------ | :----- | :----- |
| showMore | 是否显示“展开”按钮 | boolean | -      | false  |

### Slot

| name | 说明 |
| :--- | :--- |
| -    | 内容 |

### Methods

| 方法名 | 说明             | 参数                     |
| :----- | :--------------- | :----------------------- |
| toggle | 切换展开收起状态 | isOpen：当前展开收起状态 |

## SvgIcon SVG图标

### Props

| 参数 | 说明                                             | 类型   | 可选值 | 默认值 |
| :--- | :----------------------------------------------- | :----- | :----- | :----- |
| name | svg 文件名，文件存放在 `src/assets/icons` 目录下 | string | -      | -      |

## Time 相对时间

### Props

| 参数    | 说明                                                                                      | 类型                   | 可选值                             | 默认值 |
| :------ | :---------------------------------------------------------------------------------------- | :--------------------- | :--------------------------------- | :----- |
| value   | 需要对比的时间，可以是时间戳或 Date 类型                                                  | number / date / string | -                                  | -      |
| cut-off | 停止对比的节点，例如设置为 `day` ，如果对比的时间超过1天，则直接以 `Y-m-d H:i:s` 格式输出 | string                 | minute / hour / day / month / year | -      |

## Trend 趋势标记

### Props

| 参数    | 说明     | 类型    | 可选值    | 默认值 |
| :------ | :------- | :------ | :-------- | :----- |
| value   | 内容     | string  | -         | -      |
| type    | 类型     | string  | up / down | up     |
| prefix  | 前缀     | string  | -         | -      |
| suffix  | 后缀     | string  | -         | -      |
| reverse | 颜色反转 | boolean | -         | false  |
