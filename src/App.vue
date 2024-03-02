<template>
  <div id="wrapper">
    app
  </div>
</template>

<script setup lang="ts">
import { computed, unref } from 'vue'
import { useRoute } from 'vue-router';

import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
const { ctx }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
const { proxy }: any = getCurrentInstance() // 使用proxy代替ctx，因为ctx只在开发环境有效
const instance: any = getCurrentInstance() as ComponentInternalInstance
const { appContext: { config: { globalProperties: global } } }: any = getCurrentInstance();//3.0.11

const route = useRoute();

onMounted(() => {
  console.log("vue 1", ctx, proxy, global, instance);
});

</script>

<style lang="less"></style>
