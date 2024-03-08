<script setup lang="ts">
import { Toast } from '@/utils/uniapi/prompt';
const router = useRouter();
const page = {
  state: reactive({
    gamesList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  }),
  methods: {
    tabClick() {
      Toast("原神1");
    }
  }
}
</script>

<template>
  <view class="recommend">
    <view id="gameTabs" class="game-tags isTabsSticky">
      <!-- <view class="title" style="background: red; height: 100px;">
        还在为新手入坑而烦恼吗？ 还在为一发648抽不到角色而担忧吗？ 好消息！！！ 螃蟹原神初始号来啦，
        全都是双改（游戏+邮箱实名都可以改）高品质特价促销，稀有角色全都有！！！yscsh
      </view> -->
      <view class="my-tabs">
        <scroll-view class="my-scroll-view" scroll-x="true">
          <view class="my-scroll-box justify-around">
            <view @click="page.methods.tabClick" class="my-tab-item my-tab-item-active first">
              <image src="/static/images/avatar.png" class="gameLogo" />
              <text class="omit fw-600 c-3">原神1</text>
              <image src="/static/images/avatar.png" class="activeImg" style="height: 8.04px;" />
            </view>
            <view @click="page.methods.tabClick" class="my-tab-item">
              <image src="/static/images/avatar.png" class="gameLogo" />
              <text class="omit fw-600 c-3">原神2</text>
              <image src="/static/images/avatar.png" class="activeImg" style="height: 8.04px;" />
            </view>
            <view @click="page.methods.tabClick" class="my-tab-item">
              <image src="/static/images/avatar.png" class="gameLogo" />
              <text class="omit fw-600 c-3">原神3</text>
              <image src="/static/images/avatar.png" class="activeImg" style="height: 8.04px;" />
            </view>
            <view @click="page.methods.tabClick" class="my-tab-item">
              <image src="/static/images/avatar.png" class="gameLogo" />
              <text class="omit fw-600 c-3">LOL</text>
              <image src="/static/images/avatar.png" class="activeImg" style="height: 8.04px;" />
            </view>
            <view @click="page.methods.tabClick" class="my-tab-item">
              <image src="/static/images/avatar.png" class="gameLogo" />
              <text class="omit fw-600 c-3">DNF</text>
              <image src="/static/images/avatar.png" class="activeImg" style="height: 8.04px;" />
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="gameCards gameCards-bottom">
      <template v-for="(item, i) in page.state.gamesList">
        <view class="box">
          <view class="class-icon">
            <image src="/static/images/avatar.png" style="height: 30px;" />
          </view>
          <image src="/static/images/avatar.png" class="img" />
          <view class="detail">
            <view class="title">
              还在为新手入坑而烦恼吗？ 还在为一发648抽不到角色而担忧吗？ 好消息！！！ 螃蟹原神初始号来啦，
              全都是双改（游戏+邮箱实名都可以改）高品质特价促销，稀有角色全都有！！！yscsh
            </view>
            <view class="attr"> </view>
            <view class="tag-containt"></view>
            <view class="flex justify-between align-end">
              <view class="price large">
                <text class="symbol">￥</text>
                <text class="discount large">666666</text>
              </view>
              <view class="heat-box">
                <image src="/static/images/avatar.png" />2342039
              </view>
            </view>
          </view>
          <view class="my-modal">
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '@/assets/mall/home.scss';


.box {
  background: #fff;
  border-radius: 8px 8px 10px 10px;
  overflow: hidden;
  position: relative
}

.box .class-icon {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1
}

.box .class-icon uni-image {
  width: 35px;
  height: 35px
}

.box .img {
  max-height: 100px;
  width: 100%
}

.box .detail {
  padding: 5px 10px 10px 10px
}

.box .detail .title {
  height: 60px;
  line-height: 16px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  color: #000
}

.box .detail .title .gameName {
  padding: 0 5px;
  height: 15px;
  border-radius: 10px;
  border: 1px solid #fcad13;
  font-size: 10px;
  color: #fcad13
}

.box .detail .title .accountName {
  font-size: 12px;
  font-weight: 700;
  color: #46525d;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden
}

.box .detail .attr {
  font-size: 10px;
  font-weight: 400;
  color: #a3a3a3;
  line-height: 16px;
  margin: 4px 0 5px 0
}

.box .detail .price {
  font-size: 16px;
  font-weight: 700;
  color: #ff8b08;
  line-height: 16px
}

.box .detail .price .discount.large {
  font-size: 16px
}

.box .detail .price .origin {
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #ff8b08;
  line-height: 16px;
  text-decoration: line-through;
  margin-left: 4px
}

.box .detail .price .origin.large {
  font-size: 12px
}

.box .detail .symbol {
  font-size: 10px;
  font-weight: 400
}

.box .detail .heat-box {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 5px;
  padding-top: 5px;
  font-size: 10px;
  color: #5b5b5b
}

.box .detail .heat-box .time {
  font-size: 10px;
  color: #8f8f8f
}

.box .detail .heat-box uni-image {
  width: 8px;
  height: 10px;
  margin-right: 3px;
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px)
}

.box .detail .heat-box .willing {
  width: 39px;
  height: 17px
}

.box .tag {
  background: #fff8ef;
  border-radius: 1px;
  margin-bottom: 2px;
  padding: 4px 5px;
  font-size: 10px;
  font-weight: 400;
  color: #ff8b08;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center
}

.box .tag:nth-child(2) {
  margin: 0 3px
}

.my-modal .u-model__footer__button {
  color: #f08c2b !important
}

.my-modal .u-model__content__message {
  color: #999 !important
}

@media screen and (min-width:768px) {
  .box .img {
    max-height: 200px
  }
}






.my-scroll-view {
  width: 100%;
  white-space: nowrap;
  position: relative
}

.my-scroll-view .my-scroll-box {
  position: relative;
  display: flex
}

.my-scroll-view .my-scroll-box .my-tab-item {
  position: relative;
  text-align: center;
  width: 67px;
  height: 94px;
  margin-left: 8px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  color: #868686;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 9px;
  color: #333;
  line-height: 20px
}

.my-scroll-view .my-scroll-box .my-tab-item.first {
  margin-left: 5px
}

.my-scroll-view .my-scroll-box .my-tab-item uni-text {
  position: absolute;
  bottom: 9px;
  line-height: 20px;
  height: 20px;
  width: 100%;
  text-align: center
}

.my-scroll-view .my-scroll-box .my-tab-item .gameLogo {
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 11px
}

.my-scroll-view .my-scroll-box .my-tab-item .activeImg {
  visibility: hidden;
  width: 67px;
  height: 94px
}

.my-scroll-view .my-scroll-box .my-tab-item-active {
  padding-top: 6px;
  border-radius:10px
  /*      &::after {
        background: #ffdb51;
        border-radius: 6rpx;
        z-index: -1;
        content: "";
        position: absolute;
        width: 36rpx;
        height: 36rpx;
        top: 8rpx;
        left: calc(50% - 20rpx);
        transform: rotate(40deg);
      }*/
}

.my-scroll-view .my-scroll-box .my-tab-item-active .gameLogo {
  width: 54px;
  height: 54px;
  border-radius: 13px
}

.my-scroll-view .my-scroll-box .my-tab-item-active .activeImg {
  visibility: visible
}
</style>
