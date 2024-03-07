<script setup lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
const router = useRouter();
const my = (() => {
    const viewScrollTop = 0
    const upper = () => {
    }
    const viewscroll = () => {
    }
    const lower = () => {
    }
    return { viewScrollTop, upper, viewscroll, lower }
})()

</script>

<template>
    <AppProvider>
        <view class="home">
            <view class="swipe-box">
                <view class="head">
                    <image class="headLogo" style="height: 32px;" src="/static/images/avatar.png" />
                    <view class="search">
                        <view class="left">
                            <view class="u-icon u-icon--right">
                                <text class="u-icon__icon uicon-search u-iconfont"
                                    style="font-size: inherit; font-weight: normal; top: 0px;"></text>
                            </view>
                            <text>请输入游戏名称或商品标题</text>
                        </view>
                    </view>
                    <view class="cust-mini">
                        <image style="height: 26px;" src="/static/images/avatar.png" />
                        <image class="logo" style="height: 26px;" src="/static/images/logo.png" />
                    </view>
                </view>
            </view>

            <scroll-view :scroll-top="my.viewScrollTop" scroll-y="true" class="my-scroll" @scrolltoupper="my.upper"
                @scrolltolower="my.lower" @scroll="my.viewscroll">
                <view>

                    <view class="wrapper">
                        <view class="swipe-box">
                            <view class="function">
                                <view class="function-wrapper">
                                    <view class="item">
                                        游戏交易
                                    </view>
                                    <view class="item">
                                        账号估价
                                    </view>
                                    <view class="item">
                                        中介担保
                                    </view>
                                    <view class="item">
                                        账号回收
                                    </view>
                                </view>
                            </view>
                            <view class="swiper-bulletin-containt">
                                <swiper class="swiper" :indicator-dots="true" circular :autoplay="true">
                                    <swiper-item>
                                        <view class="swiper-item uni-bg-red">A</view>
                                    </swiper-item>
                                    <swiper-item>
                                        <view class="swiper-item uni-bg-green">B</view>
                                    </swiper-item>
                                    <swiper-item>
                                        <view class="swiper-item uni-bg-blue">C</view>
                                    </swiper-item>
                                </swiper>
                            </view>
                            <view class="bulletin">
                                <image class="logo" style="height: 26px;" src="/static/images/logo.png" />
                                <view class="bulletinText">
                                </view>
                                <view class="bulletinMore">
                                    <text>更多</text>
                                    <image class="logo" style="height: 26px;" src="/static/images/logo.png" />
                                </view>
                            </view>
                        </view>
                        <view class="related">
                            <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <!-- <view class="new_relatedCards leftTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view>
                            <view class="new_relatedCards rightTop">
                                <view class="item"> 游戏交易 </view>
                                <view class="item"> 账号估价 </view>
                            </view> -->
                        </view>
                    </view>


                </view>
            </scroll-view>
        </view>
    </AppProvider>
</template>

<style lang="scss" scoped>
@import '@/assets/mall/home.scss';
</style>
