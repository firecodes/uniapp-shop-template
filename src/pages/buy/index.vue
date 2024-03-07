<template>
  <AppProvider>
    <u-navbar class="navTab" :autoBack="false">
      <template #center>
        <view class="u-nav-content">
          <u-tabs :list="state.tabsList" @click="page.methods.tabsClick"></u-tabs>
        </view>
      </template>
    </u-navbar>
    <scroll-view :scroll-top="page.scroll.scrollTop" scroll-y="true" class="content" @scrolltoupper="page.methods.upper"
      @scrolltolower="page.methods.lower" @scroll="page.methods.viewscroll">

      <view class="search">
        <u-search @search="page.methods.serach" placeholder="请输入游戏名称或商品标题" :showAction="false"
          v-model="state.serachkeyword" class="serach-ui" bgColor="rgb(255, 255, 255)" borderColor="rgb(255, 220, 180)"
          :actionStyle="state.serachActionStyle" :inputStyle="state.serachInputStyle" :height="32"></u-search>
      </view>
      <view class="gameList" style="padding-bottom: 100px;">
        <view class="gameList-tabs">
          <u-tabs style="background: rgb(255, 255, 255);" :list="state.gamesTabsList"
            @click="page.methods.gamesTabsClick"></u-tabs>
        </view>
        <view class="empty" style="display: none;"> </view>
        <gameList ref="gameListRef" :name="state.gameType"></gameList>
      </view>
    </scroll-view>
    <up-back-top :scroll-top="state.scrollTop"></up-back-top>
    <!-- <up-back-top :scroll-top="scrollTop"></up-back-top> -->
  </AppProvider>
</template>

<script setup lang="ts">
import { onPageScroll } from '@dcloudio/uni-app';
import AppProvider from '@/components/AppProvider/index.vue';
import gameList from './gameList.vue';

const route = useRoute()

const gameListRef = ref<any>()
const tabGameValue = [{
  name: '全部',
  type: 'all'
}, {
  name: '网络游戏',
  type: 'pcGame'
}, {
  name: '手机游戏',
  type: 'phoneGmae'
}]
const state = reactive({
  gameListRef: ref<any>(),
  gameType: 'all',
  serachkeyword: '',
  serachActionStyle: {
    'background-color': ' rgb(255, 255, 255)',
    'border-radius': '50px',
    'border': '1px solid rgb(255, 220, 180)',
  },
  serachInputStyle: {
    'text-align': ' left',
    'color': ' rgb(102, 102, 102)',
    'background-color': 'rgb(255, 255, 255)',
  },
  scrollTop: 0,
  tabsList: [{
    name: '关注',
    type: '1'
  }, {
    name: '推荐',
    type: '2'
  }, {
    name: '电影',
    type: '3'
  }],
  gamesTabsList: tabGameValue
});
const page = {
  scroll: reactive({
    scrollTop: 0
  }),
  methods: {
    tabsClick(item) {
      console.log('tabsClick', item);
      state.gamesTabsList = tabGameValue
      if (item.type == 2) {
        state.gamesTabsList = [tabGameValue[0]]
      } else if (item.type == 3) {
        state.gamesTabsList = [tabGameValue[1]]
      }
      let gamesitem = state.gamesTabsList[0]
      gameListRef.value.page.methods.initData(gamesitem.type)
    },
    gamesTabsClick(item) {
      state.gameType = item.type
      console.log('gamesTabsClick', state.gameType, state.gameListRef, gameListRef.value, item, route.query);
      // state.gameListRef.page.methods.initData()
      gameListRef.value.page.methods.initData(state.gameType)
      console.log('gamesTabsClick', item, route.query);
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
    },
    serach(item) {
      console.log('item', item);
    },
  }
}
onPageScroll((e) => {
  console.log("reactive", e)
  state.scrollTop = e.scrollTop;
});
</script>

<style lang="scss">
.serach-ui {
  // background-color: rgb(255, 255, 255);
  // border-radius: 50px;
  // border: 1px solid rgb(255, 220, 180);
  // height: 32px;
}
</style>
