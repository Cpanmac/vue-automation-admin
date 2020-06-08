<template>
    <div>
        banner/list
        <router-link v-auth="'banner.create'" :to="{name: 'bannerCreate'}">add</router-link>
        <Auth :value="['banner.browse', 'banner.create']">sdf</Auth>
        <AuthAll :value="['banner.browse', 'banner.create']">sdf</AuthAll>
    </div>
</template>
