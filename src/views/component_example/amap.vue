<template>
    <div>
        <page-main>
            <div>经纬度：{{ lnglat }}</div>
            <!-- 注意这里替换高德地图的appkey -->
            <amap-market appkey="8f7844cc502e17bb549c04c9aaadaf94" :lnglat.sync="lnglat" :height="600" />
        </page-main>
    </div>
</template>

<script>
export default {
    inject: ['reload'],
    name: 'ComponentExampleAmap',
    props: {},
    data() {
        return {
            lnglat: [120.14053, 30.2705]
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
// scss
</style>
