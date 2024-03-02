<template>
  <routerView v-slot="{ Component }">
    <div class="absolute bottom-0 top-0 w-full mall-body">
      <transition :name="getTransitionName" mode="out-in" appear>
        <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </div>
  </routerView>
</template>

<script setup lang="ts">
import { computed, unref } from 'vue'
import { useRouteStore } from '@/store/modules/route'
import { useDesignSetting } from '@/hooks/setting/useDesignSetting'

const routeStore = useRouteStore()
const { getIsPageAnimate, getPageAnimateType } = useDesignSetting()

// 需要缓存的路由组件
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)


const getTransitionName = computed(() => {
  return unref(getIsPageAnimate) ? unref(getPageAnimateType) : undefined
})
</script>

<style lang="less">
@import '@/assets/mall/index.less';
</style>
