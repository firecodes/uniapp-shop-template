<script setup lang="ts">
const router = useRouter();
</script>

<template>
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
        <image class="logo" style="height: 26px;" src="/static/images/avatar.png" />
        <view class="bulletinText">
        </view>
        <view class="bulletinMore">
          <text>更多</text>
          <image class="logo" style="height: 26px;" src="/static/images/avatar.png" />
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
    </view>
    <view class="recommend-title">
      <image src="/static/images/avatar.png" class="headLogo" style="height: 30px;" />
      <text class="label omit">合同保障</text>
      <text class="label omit">专业团队</text>
      <view class="recommend-more">></view>
    </view>
  </view>

</template>

<style lang="scss" scoped>
@import '@/assets/mall/home.scss';
</style>
