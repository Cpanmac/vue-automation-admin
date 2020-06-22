<template>
    <div>
        <page-main>
            <image-upload action="http://new.supply.ketao.com/api/supply/upload/upload" :url.sync="image" :width="250" :height="150" :data="{'module':'MEMBER','type':'IMAGE','token':'TKD622955070740951'}" placeholder="https://fakeimg.pl/250x150" />
        </page-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: ''
        }
    }
}
</script>
