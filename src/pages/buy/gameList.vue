<template>
  <scroll-view class="gamesCard" :scroll-top="page.scroll.scrollTop" scroll-y="true" @scrolltoupper="page.methods.upper"
    @scrolltolower="page.methods.lower" @scroll="page.methods.viewscroll">
    <view>
      <u-index-list class="indexList" :sticky="false" :customNavHeight="100" :index-list="state.indexList"
        @select="page.methods.selectIndexList" activeColor="#ffbc7a">
        <template v-for="(item, index) in state.itemArr">
          <!-- #ifdef APP-NVUE -->
          <u-index-anchor class="indexAnchor" :text="state.indexList[index]" :height="40" bgColor="#fff">
            <!-- <template #text>
              {{ state.indexList[index] }}
              <view class="indexBefore activeBefore">
                {{ state.indexList[index] }}
              </view>
            </template> -->
          </u-index-anchor>
          <!-- #endif -->
          <u-index-item class="indexItem">
            <!-- #ifndef APP-NVUE -->
            <u-index-anchor class="indexAnchor" :text="state.indexList[index]" :height="40" bgColor="#fff">

              <!-- <template #text>
                {{ state.indexList[index] }}
                <view class="indexBefore activeBefore">
                  {{ state.indexList[index] }}
                </view>
              </template> -->
            </u-index-anchor>
            <!-- #endif -->
            <view class="list">
              <view class="item" v-for="(cell, index) in item">
                <!-- <image
                  src="https://images.pxb7.com/images/game/20230830/20230830145630_500428.jpg?x-oss-process=style/game_icon">
                </image> -->
                <image :src="cell.game_image">
                </image>
                <text class="text">{{ cell.game_name }}</text>
              </view>
            </view>
          </u-index-item>
        </template>
        <!-- <view slot="footer" class="u-safe-area-inset--bottom">
          <text class="list__footer">共{{ 11 }}位</text>
        </view> -->
      </u-index-list>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { onLoad, onPageScroll } from '@dcloudio/uni-app';
import listGroup from './data/listGroup.json';
import listGroupPC from './data/listDataPC.json';
import listDataPhone from './data/listDataPhone.json';
import listData from './data/listData.json';
const props = defineProps({
  name: { type: String },
});
const emits = defineEmits(['click']);
const state = reactive({
  serachkeyword: '',
  indexList: [],
  itemArr: []
});
const page = {
  scroll: reactive({
    scrollTop: 0
  }),
  methods: {
    click() {
      emits('click');
    },
    initData(type: any) {
      state.indexList = []
      state.itemArr = []
      let data: any = listGroup.data
      const name = type || props.name
      if (name === 'pcGame') {
        data = listGroupPC.data
      } else if (name === 'phoneGmae') {
        data = listDataPhone.data
      }
      console.log('initData state', name, state);
      Object.keys(data).forEach((key) => {
        let item = data[key]
        state.indexList.push(key)
        state.itemArr.push(item)
      })
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
    selectIndexList(item) {
      console.log('item', item);
    },
  }
}
defineExpose({ page })
onLoad((query) => {
  console.log('onLoad query', query);
  page.methods.initData()
});

</script>

<style lang="scss" scoped>
@import '@/assets/mall/buy.scss';

.indexItem {}

.indexAnchor {
  font-size: 16px;
  color: rgb(102, 102, 102);
  font-weight: bold;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(245, 245, 245);
  border-bottom: 1px solid rgb(245, 245, 245);
  position: relative;
}
</style>
