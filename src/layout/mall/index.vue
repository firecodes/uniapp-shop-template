<!-- eslint-disable prettier/prettier -->
<template>
  <div class="h-screen flex flex-col mall-app">
    <van-nav-bar v-if="getShowHeader" placeholder fixed :title="getTitle" />
    <routerView class="flex-1 overflow-x-hidden">
      <template #default="{ Component, route }">
        <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component :is="Component" v-else :key="route.fullPath" />
      </template>
    </routerView>
    <van-tabbar route class="tabbar">
      <van-tabbar-item v-for="menu in getMenus" :key="menu.name" replace :to="menu.path"
        :icon="(menu?.meta?.icon as string)">
        {{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useRouteStore } from '@/store/modules/route'

const routeStore = useRouteStore()
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)  // 需要缓存的路由组件

const currentRoute = useRoute()
const getTitle = computed(() => currentRoute.meta.title as string)

// 菜单
const getMenus: ComputedRef<RouteRecordRaw[]> = computed(() =>
  routeStore.menus.filter((item) => {
    return !item.meta?.innerPage
  }),
)

const getShowHeader = computed(() => !currentRoute.meta.hiddenHeader)
</script>

<style scoped lang="less">
.tabbar {
  bottom: 0;
  width: 100%;
  position: relative;
}
</style>
