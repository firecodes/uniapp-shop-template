<template>
  <van-tabs v-model:active="activeName" :scrollspy="true" :swipeable="true">
    <van-tab title="热门手游" name="a">
      <tabPanel class="a"></tabPanel>
    </van-tab>
    <van-tab title="热门端游" name="c">
      <tabPanel class="b"></tabPanel>
    </van-tab>
    <van-tab title="热门端游1" name="d">
      <tabPanel class="b"></tabPanel>
    </van-tab>
    <van-tab title="热门端游2" name="b1">
      <tabPanel class="b"></tabPanel>
    </van-tab>
    <van-tab title="热门端游3" name="b2">
      <tabPanel class="b"></tabPanel>
    </van-tab>
    <van-tab title="热门端游5" name="b3">
      <tabPanel class="b"></tabPanel>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
const activeName = ref('a');
import tabPanel from "./tabPanel.vue";
import type { TabsInstance } from 'vant';

const tabsRef = ref<TabsInstance>();
tabsRef.value?.scrollTo(0);
</script>

<style scoped lang="less"></style>
