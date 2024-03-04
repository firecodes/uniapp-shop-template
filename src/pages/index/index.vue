<template>
    <AppProvider>
        <!-- <header class="home-header wrap" :class="{ 'active': state.headerScroll }">
            <router-link tag="i" to="./category"><i class="nbicon nbmenu2"></i></router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="iconfont icon-search"></i>
                <router-link tag="span" class="search-title" to="./product-list?from=home">山河无恙，人间皆安</router-link>
            </div>
            <router-link class="login" tag="span" to="./login" v-if="!state.isLogin">登录</router-link>
            <router-link class="login" tag="span" to="./user" v-else>
                <van-icon name="manager-o" />
            </router-link>
        </header> -->
        <nut-swiper :init-page="state.page" :pagination-visible="true" pagination-color="#426543"
            pagination-unselected-color="#808080" auto-play="3000">
            <nut-swiper-item>
                <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
            </nut-swiper-item>
            <nut-swiper-item>
                <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
            </nut-swiper-item>
            <nut-swiper-item>
                <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
            </nut-swiper-item>
            <nut-swiper-item>
                <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
            </nut-swiper-item>
        </nut-swiper>
        <nut-grid :column-num="5" :border="false">
            <template v-for="(item, i) in state.categoryList" :key="i">
                <nut-grid-item @click="tips" :text="item.name">
                    <nut-icon name="dongdong" size="40px" custom-color="#478EF2" />
                </nut-grid-item>
            </template>
        </nut-grid>

        <nut-tabs v-model="state.tab1value">
            <nut-tab-pane title="新品上线">

                <nut-grid :column-num="2">

                    <template v-for="(item, i) in state.categoryList" :key="i">
                        <nut-grid-item @click="tips" :text="item.name">
                            <nut-icon name="dongdong" size="40px" custom-color="#478EF2" />
                        </nut-grid-item>
                    </template>
                </nut-grid>
            </nut-tab-pane>
        </nut-tabs>
        <nut-tabs v-model="state.tab1value2">
            <nut-tab-pane title="热门商品">
                <nut-grid :column-num="2">

                    <template v-for="(item, i) in state.categoryList" :key="i">
                        <nut-grid-item @click="tips" :text="item.name">
                            <nut-icon name="dongdong" size="40px" custom-color="#478EF2" />
                        </nut-grid-item>
                    </template>
                </nut-grid>
            </nut-tab-pane>
        </nut-tabs>
        <nut-tabs v-model="state.tab1value3">
            <nut-tab-pane title="最新推荐">

                <nut-grid :column-num="2">

                    <template v-for="(item, i) in state.categoryList" :key="i">
                        <nut-grid-item @click="tips" :text="item.name">
                            <nut-icon name="dongdong" size="40px" custom-color="#478EF2" />
                        </nut-grid-item>
                    </template>
                </nut-grid>
            </nut-tab-pane>
        </nut-tabs>
    </AppProvider>
</template>

<script setup lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

const state = reactive({
    page: 2,
    tab1value: '0',
    tab1value2: '0',
    tab1value3: '0',
    swiperList: [], // 轮播图列表
    isLogin: false, // 是否已登录
    headerScroll: false, // 滚动透明判断
    hots: [],
    newGoodses: [],
    recommends: [],
    categoryList: [
        {
            name: '新蜂超市',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
            categoryId: 100001
        }, {
            name: '新蜂服饰',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
            categoryId: 100003
        }, {
            name: '全球购',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
            categoryId: 100002
        }, {
            name: '新蜂生鲜',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
            categoryId: 100004
        }, {
            name: '新蜂到家',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
            categoryId: 100005
        }, {
            name: '充值缴费',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
            categoryId: 100006
        }, {
            name: '9.9元拼',
            imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
            categoryId: 100007
        }, {
            name: '领劵',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
            categoryId: 100008
        }, {
            name: '省钱',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
            categoryId: 100009
        }, {
            name: '全部',
            imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
            categoryId: 100010
        }
    ],
    loading: true
})
onShow(async () => {

})

// nextTick(() => {
//     document.body.addEventListener('scroll', () => {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//         scrollTop > 100 ? state.headerScroll = true : state.headerScroll = false
//     })
// })

const goToDetail = (item) => {
    //router.push({ path: `/product/${item.goodsId}` })
}

const tips = () => {
    // showToast('敬请期待');
}
</script>

<style lang="scss" scoped>
.nut-swiper-item {
    line-height: 200px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
