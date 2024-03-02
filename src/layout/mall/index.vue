<!-- eslint-disable prettier/prettier -->

<template>
  <div class="h-screen flex flex-col mall-app">
    <template v-if="getShowHeader">
      <van-config-provider :theme-vars="themeVarsHeader">
        <van-nav-bar placeholder fixed :title="getTitle" />
      </van-config-provider>
    </template>
    <routerView class="flex-1 overflow-x-hidden">

      <template #default="{ Component, route }">
        <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component :is="Component" v-else :key="route.fullPath" />

      </template>
    </routerView>

    <van-config-provider :theme-vars="themeVars">
      <van-tabbar route class="tabbar">
        <!-- <van-tabbar-item v-for="menu in getMenus" :key="menu.name" replace :to="menu.path"
        :icon="(menu?.meta?.icon as string)">
        {{ menu.meta?.title }}
      </van-tabbar-item> -->
        <van-tabbar-item replace to="/vue/index" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/vue/gameList" icon="search" badge="3">我要买</van-tabbar-item>
        <van-tabbar-item class="sellHome" to="/vue/sell-home">
          <span></span>

          <template #icon="props" class="sellHome-icon">
            <!-- <van-icon name="chat-o" :class="{ active: props.active }" /> -->
            <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
            <span class="sellHome-icon-img" :class="{ active: props.active }" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/vue/message" icon="home-o">消息</van-tabbar-item>
        <van-tabbar-item replace to="/vue/center" icon="search">我的</van-tabbar-item>
      </van-tabbar>
    </van-config-provider>
    <!-- <van-back-top target=".app" bottom="30vh" /> -->
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useRouteStore } from '@/store/modules/route'

const routeStore = useRouteStore()
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)  // 需要缓存的路由组件

const currentRoute = useRoute()
const getTitle = computed(() => currentRoute.meta.title as string)

// let allMenu: any = routeStore?.mallMenus[0]
// // 菜单
// const getMenus: ComputedRef<RouteRecordRaw[]> = computed(() =>
//   allMenu.children.filter((item: any) => {
//     return item.meta?.innerPage
//   }),
// )


const getShowHeader = computed(() => !currentRoute.meta.hiddenHeader)

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars = reactive({
  'tabbar-height': '60px',
  'tabbar-background': '#fcfcfc',
  'tabbar-item-font-size': '14px',
  'tabbar-item-text-color': '#5f646e',
  'tabbar-item-active-color': '#ff6600',
  'tabbar-item-active-background': '#fcfcfc',
  // 'tabbar-item-line-height': '23.5px',
  // 'tabbar-item-icon-margin-bottom': '12px',
  'tabbar-item-icon-size': '28px'
  //   --van-tabbar-height	50px	-
  // --van-tabbar-z-index	1	-
  // --van-tabbar-background	var(--van-background-2)	-
  // --van-tabbar-item-font-size	var(--van-font-size-sm)	-
  // --van-tabbar-item-text-color	var(--van-text-color)	-
  // --van-tabbar-item-active-color	var(--van-primary-color)	-
  // --van-tabbar-item-active-background	var(--van-background-2)	-
  // --van-tabbar-item-line-height	1	-
  // --van-tabbar-item-icon-size	22px	-
  // --van-tabbar-item-icon-margin-bottom
});

const themeVarsHeader = reactive({
  'nav-bar-height': '60px',
  'nav-bar-background': '#f6f6f6',
  // 'nav-bar-title-font-size': '12px,

  //   van-nav-bar-height	46px	-
  // --van-nav-bar-background	var(--van-background-2)	-
  // --van-nav-bar-arrow-size	16px	-
  // --van-nav-bar-icon-color	var(--van-primary-color)	-
  // --van-nav-bar-text-color	var(--van-primary-color)	-
  // --van-nav-bar-title-font-size	var(--van-font-size-lg)	-
  // --van-nav-bar-title-text-color	var(--van-text-color)	-
  // --van-nav-bar-z-index	1
});

</script>

<style scoped lang="less">
.tabbar {
  bottom: 0;
  width: 100%;
  position: relative;
  border-top: 1px solid #ccc;
  background: #fcfcfc;
}
</style>

<style lang="less">
.tabbar {
  .sellHome {
    position: relative;

    .sellHome-icon,
    .van-tabbar-item__icon {
      width: 1.3rem;
      height: 1.3rem;

      .sellHome-icon-img {
        position: absolute;
        top: -0.35rem;
        /* left: 0.15rem; */
        width: 1.3rem;
        height: 1.3rem;
        background: url(https://m.5173.com/dist/src/assets/images/Icon/radius-roll.png?23240a1…) no-repeat 50%;
        background-size: 100%;
        z-index: 21;
      }
    }
  }
}
</style>