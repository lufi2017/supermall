<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#213ab6">
            <img slot="item-icon" src="~assets/img/tabbar/bottomhome.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/bottomhome_h.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category"  activeColor="#213ab6">
            <img slot="item-icon" src="~assets/img/tabbar/bottomhome.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/bottomhome_h.png" alt="">
            <div slot="item-text">项目</div>
        </tab-bar-item>
        <tab-bar-item path="/cart"  activeColor="#213ab6">
            <img slot="item-icon" src="~assets/img/tabbar/bottomhome.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/bottomhome_h.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/profile"  activeColor="#213ab6">
            <img slot="item-icon" src="~assets/img/tabbar/bottomhome.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/bottomhome_h.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/tabbar/TabBar";
    import TabBarItem from "components/tabbar/TabBarItem";


    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>