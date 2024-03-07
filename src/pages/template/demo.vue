<script setup lang="ts">
import { onPageScroll } from '@dcloudio/uni-app';
import AppProvider from '@/components/AppProvider/index.vue';

const state = reactive({
  scrollTop: 0,
  tabsList: [{
    name: '关注',
  }, {
    name: '推荐',
  }, {
    name: '电影'
  }]
});
const page = {
  methods: {
    tabsClick(item) {
      console.log('item', item);
    },
    scrollTop(item) {
      console.log('item', item);
    },
    upper(item) {
      console.log('item', item);
    },
    viewscroll(item) {
      console.log('item', item);
    },
    lower(item) {
      console.log('item', item);
    }
  }
}
onPageScroll((e) => {
  console.log("reactive", e)
  state.scrollTop = e.scrollTop;
});
</script>

<template>
  <AppProvider>
    <u-navbar class="navTab" :autoBack="true">
      <template #center>
        <view class="u-nav-content">
          <u-tabs :list="state.tabsList" @click="page.methods.tabsClick"></u-tabs>
        </view>
      </template>
    </u-navbar>
    <scroll-view :scroll-top="page.methods.scrollTop" scroll-y="true" class="content"
      @scrolltoupper="page.methods.upper" @scrolltolower="page.methods.lower" @scroll="page.methods.viewscroll">
      <view class="page" style="position: initial;">

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
    <up-back-top :scroll-top="state.scrollTop"></up-back-top>
    <!-- <up-back-top :scroll-top="scrollTop"></up-back-top> -->
  </AppProvider>
</template>

<style lang="scss"></style>
