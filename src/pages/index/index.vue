<script setup lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
import search from './serach.vue'
import commonScroll from './commonScroll.vue'
import recommendScroll from './recommendScroll.vue'
import { onPageScroll } from '@dcloudio/uni-app';
const router = useRouter();
const page = {
  scroll: reactive({
    scrollTop: 0
  }),
  methods: {
    scrollTop(item) {
      console.log('scroll scrollTop', item);
    },
    upper(item) {
      console.log('scroll 1 upper', item);
    },
    viewscroll(e) {
      console.log('scroll viewscroll', e, uni.$u);
      let scrollTop = e.detail.scrollTop
      // if(scrollTop > 50){
      //   ("isHeadSearchSticky")
      // } else{
      //   ("isHeadSearchSticky")
      // }
    },
    lower(item) {
      console.log('scroll 12 lower', item);
    },
    serach(item) {
      console.log('serach', item);
    },
  }
}
onPageScroll((e) => {
  console.log("onPageScroll", e)
});

</script>

<template>
  <AppProvider class="home">
    <search></search>
    <scroll-view class="my-scroll" :scroll-top="page.scroll.scrollTop" scroll-y="true"
      @scrolltoupper="page.methods.upper" @scrolltolower="page.methods.lower" @scroll="page.methods.viewscroll">
      <view class="home-scroll">
        <commonScroll></commonScroll>
        <recommendScroll></recommendScroll>
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
