<template>
  <div class="h-screen flex flex-col ">
    <div class="w-full bg-fff">
      <van-cell title="登录/注册" size="large" icon="shop-o" is-link />
      <van-cell title="单元格">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
    </div>
    <div class="w-full bg-fff mt-2">
      <van-cell title="我是买家" size="large" icon="shop-o" is-link>
      </van-cell>
      <van-cell title="我是买家" size="large" icon="shop-o" is-link>
      </van-cell>
      <van-cell value="内容" icon="shop-o" is-link>

        <template #title>
          <span class="custom-title">单元格</span>
          <van-tag type="primary">标签</van-tag>
        </template>
      </van-cell>
    </div>
    <div class="w-full bg-fff mt-2">
      <van-cell title="积分中心" size="large" icon="shop-o" is-link />
      <van-cell title="积分中心" size="large" icon="shop-o" is-link />
      <van-cell title="积分中心" size="large" icon="shop-o" is-link />
      <van-cell title="积分中心" size="large" icon="shop-o" is-link />
      <van-cell title="积分中心" size="large" icon="shop-o" is-link />
    </div>
    <div class="w-full bg-fff mt-2">
      <van-cell title="客服中心" size="large" icon="shop-o" is-link />
      <van-cell title="客服中心" size="large" icon="shop-o" is-link />
      <van-cell title="客服中心" size="large" icon="shop-o" is-link />
      <van-cell title="客服中心" size="large" icon="shop-o" is-link />
      <van-cell title="客服中心" size="large" icon="shop-o" is-link />
    </div>
    <div class="mb-4 w-full bg-fff"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

</script>

<style scoped lang="less"></style>
