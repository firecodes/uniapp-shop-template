<script setup lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
import search from './serach.vue'
import commonScroll from './commonScroll.vue'
import { onPageScroll } from '@dcloudio/uni-app';
const router = useRouter();
const page = {
  scroll: reactive({
    scrollTop: 0
  }),
  methods: {
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
    },
    serach(item) {
      console.log('item', item);
    },
  }
}
onPageScroll((e) => {
  console.log("reactive", e)
});

</script>

<template>
  <AppProvider class="home">
    <search></search>
    <scroll-view :scroll-top="page.scroll.scrollTop" scroll-y="true" @scrolltoupper="page.methods.upper"
      @scrolltolower="page.methods.lower" @scroll="page.methods.viewscroll">
      <view class="home-scroll">
        <commonScroll></commonScroll>
      </view>
    </scroll-view>
  </AppProvider>
</template>

<style lang="scss" scoped>
@import '@/assets/mall/home.scss';

.home {
  // height: calc(100vh - 50px - 0px);
  // overflow: auto;
}
</style>
