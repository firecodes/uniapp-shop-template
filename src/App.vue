<template>
  <div>
    <template v-if="getPathMall()">
      <MallApp></MallApp>
    </template>
    <template v-else>
      <DefaultApp></DefaultApp>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, unref } from 'vue'
import { useRouteStore } from '@/store/modules/route'
import DefaultApp from '@/layout/default/App.vue'
import MallApp from '@/layout/mall/App.vue'
import { PageEnum } from '@/enums/pageEnum'
import { useRoute } from 'vue-router';

import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
const { ctx }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
const { proxy }: any = getCurrentInstance() // 使用proxy代替ctx，因为ctx只在开发环境有效
const instance: any = getCurrentInstance() as ComponentInternalInstance
const { appContext: { config: { globalProperties: global } } }: any = getCurrentInstance();//3.0.11

const route = useRoute();
const routeStore = useRouteStore()
function getPathMall() {
  if (route.path.includes(PageEnum.MALL_PAGE_NAME)) { return true }
  return false
}
onMounted(() => {
  console.log("vue 1", ctx, proxy, global, instance);
});

</script>

<style lang="less"></style>
