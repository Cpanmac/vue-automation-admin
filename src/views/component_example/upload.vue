<template>
    <div>
        <page-main>
            <image-upload :url.sync="image" :width="250" :height="150" :type="2" :data="{'width':250,'height':150}" placeholder="https://fakeimg.pl/250x150" />
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
