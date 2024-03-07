<script setup lang="ts">
import { onPageScroll } from '@dcloudio/uni-app';
import AppProvider from '@/components/AppProvider/index.vue';

const state = reactive({
  scrollTop: 0,
  tabsList: [{
    name: '科技'
  }, {
    name: '音乐'
  }, {
    name: '美食'
  }, {
    name: '文化'
  }, {
    name: '财经'
  }, {
    name: '手工'
  }]
});
const page = {
  scroll: reactive({
    scrollTop: 0
  }),
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
    <up-back-top :scroll-top="state.scrollTop"></up-back-top>
  </AppProvider>
</template>

<style lang="scss"></style>
