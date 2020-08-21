import Vue from "vue";
import VueRouter from "vue-router";

import Home from "views/home/Home";
import Category from "views/category/Category";
import Cart from "views/cart/Cart";
import Profile from "views/profile/Profile";

// const Home=()=>import ('@/views/home/Home')
// const Category=()=>import ('@/views/category/Category')
// const Cart=()=>import ('@/views/cart/Cart')
// const Profile=()=>import ('@/views/profile/Profile')
// 安装插件
Vue.use(VueRouter)

// 创建路由对象
const routes = [
    {
        path: '',
        name:Home,
        redirect: '/home'
    },
    {
        path: '/home',
        name:Home,
        component: Home
    },
    {
        path: '/category',
        name:Category,
        component: Category
    },
    {
        path: '/cart',
        name:Cart,
        component: Cart
    },
    {
        path: '/profile',
        name:Profile,
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    console.log(isChunkLoadFailed,'/Loading chunk (\d)+ failed/g','路由懒加载找不到对应的moudle')
    if (isChunkLoadFailed) {
        window.location.reload();
    }else{
        console.log(error)
    }
});

// 导出

export default router

