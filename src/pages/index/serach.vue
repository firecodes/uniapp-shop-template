<script setup lang="ts">
const router = useRouter();
</script>

<template>
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
</template>

<style lang="scss" scoped>
@import '@/assets/mall/home.scss';
</style>
