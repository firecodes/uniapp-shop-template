<template>
  <div class="w-full">
    <div class="tab-class01" style="min-height: 482px;">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="vis-list">
            <van-cell class="vis-list-cell" v-for="item in list" :key="item" :title="item" />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
    <div class="tab-letter" style="height: 482px;"><a class="active"><span class="hot-img"></span></a> <a
        class="">7</a><a class="">A</a><a class="">B</a><a class="">C</a><a class="">D</a><a class="">E</a><a
        class="">F</a><a class="">G</a><a class="">H</a><a class="">J</a><a class="">K</a><a class="">L</a><a
        class="">M</a><a class="">N</a><a class="">O</a><a class="">P</a><a class="">Q</a><a class="">R</a><a
        class="">S</a><a class="">T</a><a class="">V</a><a class="">W</a><a class="">X</a><a class="">Y</a><a
        class="">Z</a><a class="">元</a></div>
    <a href="/vue/gameList/2">
      <div class="tab-more border-top"><a class="more f30 color-666">更多游戏</a></div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

const themeGridVars = reactive({
  'grid-item-content-background': '#fff',

  //   --van-grid-item-content-padding	var(--van-padding-md) var(--van-padding-xs)	-
  // --van-grid-item-content-background	var(--van-background-2)	-
  // --van-grid-item-content-active-color	var(--van-active-color)	-
  // --van-grid-item-icon-size	28px	-
  // --van-grid-item-text-color	var(--van-text-color)	-
  // --van-grid-item-text-font-size	var(--van-font-size-sm)	-
});



const list: any = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    loading.value = false;

    if (list.value.length >= 100) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
onLoad();
</script>

<style scoped lang="less">
.swiper-container3 {
  white-space: nowrap;
  width: 100% !important;
  padding: 0
}

.swiper-container3 .swiper-slide {
  display: inline-block;
  width: 20% !important
}

.swiper-container3 .swiper-wrapper {
  width: 100%;
  margin-top: .96rem;
  padding: .3rem 0;
  height: auto
}

img {
  margin: auto
}

.home {
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
  height: auto;
  max-width: 768px
}

.tab {
  display: block;
  overflow: hidden;
  height: auto;
  position: relative
}

.tab-class01 {
  float: left;
  width: 86%;
  margin-bottom: 0.5rem;
}

.tab-letter {
  position: relative;
  right: 0;
  width: 14%;
  overflow-y: scroll;
  height: 8.64rem;
  z-index: 19;
  background: #f1f1f1;
  -webkit-overflow-scrolling: touch;
}

.tab-letter a {
  display: block;
  line-height: 1rem;
  text-align: center;
  font-size: .42rem;
  color: #333;
  background: #f1f1f1;
}

.tab-letter {
  overflow-y: auto;
  padding-bottom: 2.3rem;
  position: absolute;
  display: block;
  overflow-x: hidden
}

.tab-class01 {
  margin-bottom: 0 !important;
  background-color: #fff
}

.tab-letter-relative {
  position: relative
}

.tab-letter-fixed {
  position: fixed !important;
  top: 1.63rem;
  overflow-y: auto
}

.tab-body {
  background-color: #f1f1f1
}

ul li {
  padding: 0
}

.index-header {
  z-index: 20
}

.index-header .index-header-search {
  width: 59%;
  float: left
}

.index-header .index-header-search .text-input {
  background: #fff;
  padding-left: 0;
  text-align: center;
  width: 100%
}

.index-header .index-header-search .text-input span {
  display: inline-block;
  background-size: .33rem;
  height: .72rem;
  padding-left: .45rem
}

.vis-list {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  list-style: none;
}

.vis-list-cell {
  display: block;
  padding: 1rem;
  background-color: #f0f8ff;
  border-radius: 2px;
  overflow: hidden;
}
</style>
