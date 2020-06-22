<template>
    <div>
        <page-main>
            <el-divider content-position="left">单图上传</el-divider>
            <image-upload action="http://new.supply.ketao.com/api/supply/upload/upload" :url.sync="image" :width="250" :height="150" :data="{'module':'MEMBER','type':'IMAGE','token':'TKD622955070740951'}" placeholder="https://fakeimg.pl/250x150" />
            <el-divider content-position="left">多图上传</el-divider>
            <images-upload action="http://new.supply.ketao.com/api/supply/upload/upload" :url.sync="images" :data="{'module':'MEMBER','type':'IMAGE','token':'TKD622955070740951'}" />
        </page-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: '',
            images: [
                // 'http://image.lookbi.com/four_season/uploads/supply//1/20200623/1592845429844750.png',
                'https://fakeimg.pl/250x150'
            ]
        }
    }
}
</script>
