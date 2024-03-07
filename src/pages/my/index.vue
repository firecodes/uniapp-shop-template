<script setup lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
</script>

<template>
  <AppProvider class="page-my-block" style="position: initial;">
    <view class="my">
      <view class="my-head">
        <view class="my-head-info">
          <view class="my-head-info-left">
            <image class="avatar" src="/static/images/avatar.png" />
            <view>
              <view class="user-name">
                <view class="login">登录 </view>
                <view class="enroll">注册 </view>
              </view>
              <view class="user-sn">
                <text class="">ID:</text>
                <text class="">暂无</text>
              </view>
            </view>
          </view>
          <view class="my-head-info-right">
            <image style="width: 14px;height: 14px;" src="/static/images/avatar.png" />
          </view>
        </view>
        <view class="my-head-recording">
          <view class="my-head-recording-item">
            <image src="/static/images/avatar.png" />
            <text>收藏</text>
          </view>
          <view class="my-head-recording-item">
            <image src="/static/images/avatar.png" />
            <text>足迹</text>
          </view>
          <view class="my-head-recording-item">
            <image src="/static/images/avatar.png" />
            <text>咨询记录</text>
          </view>
          <view class="my-head-recording-item">
            <image src="/static/images/avatar.png" />
            <text>券包</text>
          </view>
        </view>
      </view>
      <view class="my-body">
        <view class="my-body-contract">
          <view class="my-body-contract-card">
            <view class="my-body-contract-card-box">
              <view class="my-body-contract-card-box-title">
                <view>
                  <image style="width: 14px;height: 14px;" src="/static/images/avatar.png" />
                  合同中心
                </view>
              </view>
              <view class="my-body-contract-card-box-tip">
                买卖交易签署合同,安全有保障!
              </view>
            </view>
          </view>
          <view class="my-body-contract-btn">
            查看
          </view>
        </view>
        <view class="my-body-buyer">

          <view class="my-body-buyer-title">
            <view>我是卖家</view>
            <view class="my-body-buyer-title-btn">
              <view class="u-icon u-icon--right">去发布
                <image style="width: 14px;height: 14px;" src="/static/images/avatar.png" />
              </view>
            </view>
          </view>
          <view class="my-body-buyer-list">
            <view class="item">
              <view class="num">0</view>
              <view class="label">账号订单 </view>
            </view>
            <view class="item">
              <view class="num">0</view>
              <view class="label">充值订单 </view>
            </view>
            <view class="item">
              <view class="num">0</view>
              <view class="label">装备订单 </view>
            </view>
            <view class="item">
              <view class="num">0</view>
              <view class="label">发出的议价 </view>
            </view>
          </view>
        </view>
        <view class="my-body-seller">
          <view class="my-body-seller-title">
            <view>我是卖家</view>
            <view class="my-body-seller-title-btn">
              <view class="u-icon u-icon--right">去发布
                <image style="width: 14px;height: 14px;" src="/static/images/avatar.png" />
              </view>
            </view>
          </view>
          <view class="my-body-seller-list">
            <view class="item">
              <view class="num">0</view>
              <view class="label">发布的账号 </view>
            </view>
            <view class="item">
              <view class="num">0</view>
              <view class="label">发布的账号 </view>
            </view>
            <view class="item">
              <view class="num">0</view>
              <view class="label">发布的账号 </view>
            </view>
            <view class="item">
              <view class="num">0</view>
              <view class="label">发布的账号 </view>
            </view>
          </view>
        </view>
        <view class="my-body-other">
          <view class="my-body-other-title">其他服务</view>
          <view class="my-body-other-list">
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
            <view class="my-body-other-list-item">
              <image src="/static/images/avatar.png" />
              <text>联系我们</text>
            </view>
          </view>
        </view>
        <view class="my-body-tip c-blue text-center">
          <text>服务协议</text>
          <text class="mx-10 grap"></text>
          <text>隐私政策</text>
        </view>
      </view>
    </view>
  </AppProvider>
</template>


<style lang="scss" scoped>
@import '@/assets/mall/my.scss';

.page-my-block {
  background: url("/static/bg.625cab5a.png") no-repeat;
  background-size: cover;
  background-position: top;
  overflow: auto;
}
</style>
