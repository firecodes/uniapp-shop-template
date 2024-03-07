<template>
  <view class="login">
    <view>
      <u-navbar :autoBack="false" title="">
        <template #center>
          <text>{{ state.loginType == 1 ? '密码登录' : '验证码登录' }}</text>
        </template>

        <template #right>
          <text @click="page.methods.clickLoginType">
            {{ state.loginType == 1 ? '验证码登录' : '密码登录' }}
          </text>
        </template>
      </u-navbar>
      <view class="u-navbar-placeholder" style="width: 100%; height: 44px;"></view>
    </view>
    <view class="login-box">

      <view class="login-box-head">
        <view class="title">账号</view>
        <view class="illustrate">签署合同交易受法律保护</view>
      </view>
      <view class="login-box-body">
        <view class="verify-contains blur-top">
          <view class="pic active-blur"></view>
        </view>
        <u--form labelPosition="left" :model="form" ref="form1">
          <u-form-item label="邮箱" prop="userInfo.name" borderBottom>
            <u--input v-model="form.email" border="none"></u--input>
          </u-form-item>

          <template v-if="state.loginType == 1">
            <u-form-item label="密码" prop="userInfo.sex" borderBottom>
              <u--input type="password" v-model="form.password" placeholder="密码" border="none"></u--input>
            </u-form-item>
          </template>

          <template v-else>
            <u-form-item label="验证码" prop="userInfo.sex" borderBottom>
              <u--input type="password" v-model="form.password" placeholder="密码" border="none"></u--input>
            </u-form-item>
          </template>
        </u--form>
        <up-button color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" @click="submit" type="primary"
          :plain="true" text="登录"></up-button>
      </view>
      <view class="login-box-foot">
        <view>注册账号</view>
        <view>忘记密码</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/state/modules/auth';
import { Toast } from '@/utils/uniapi/prompt';
// import { useRequest } from 'alova';
import { login } from '@/services/api/auth';
import { omit } from 'lodash-es';
import { useRequest } from 'alova';
import { stat } from 'fs';
const state = reactive({
  loginType: 1,
});
const page = {
  methods: {
    clickLoginType() {
      if (state.loginType == 1) {
        state.loginType = 2
      } else {
        state.loginType = 1
      }
    }
  }
}
const pageQuery = ref<Record<string, any> | undefined>(undefined);
const router = useRouter();
const redirect = ref<string>('');
onLoad((query) => {
  pageQuery.value = query;
  redirect.value = query?.redirect || '';
});
const backHome = () => {
  // router.pushTab(redirect.value);
  // router.push("/")
  uni.switchTab({ url: '/pages/index/index' });
};
const form = reactive({
  email: 'uni-app@test.com',
  password: 'Vue3_Ts_Vite',
});
const authStore = useAuthStore();
const { send: sendLogin } = useRequest(login, { immediate: false });
const submit = (e: any) => {
  sendLogin(form).then((res) => {
    Toast('登录成功', { duration: 1500 });
    authStore.setToken(res.token);
    setTimeout(() => {
      if (unref(pageQuery)?.redirect) {
        // 如果有存在redirect(重定向)参数，登录成功后直接跳转
        const params = omit(unref(pageQuery), ['redirect', 'tabBar']);
        if (unref(pageQuery)?.tabBar) {
          // 这里replace方法无法跳转tabbar页面故改为replaceAll
          router.replaceAll({ name: unref(pageQuery).redirect, params });
        } else {
          router.replace({ name: unref(pageQuery).redirect, params });
        }
      } else {
        backHome()
        // 不存在则返回上一页
        //  router.back();
      }
    }, 1100);
  });
};
</script>

<style lang="scss" scoped>
// .container {
//   margin: 0 auto;
//   width: 80%;

//   .title {
//     padding: 320rpx 0 32rpx 0;
//     text-align: center;
//   }

//   .form-wrap {
//     padding: 20rpx 24rpx;
//     box-shadow: 16rpx 16rpx 30rpx #e5e7eb;

//     .form {
//       .form-item {
//         display: flex;
//         height: 88rpx;
//         border-bottom: 2rpx solid #dbeafe;
//         align-items: center;

//         .form-label {
//           min-width: 96rpx;
//         }

//         .form-element {
//           flex-grow: 1;
//         }
//       }

//       .submit-btn {
//         margin-top: 44rpx;
//         border: 4rpx solid #bfdbfe;
//         background-color: #60a5fa;
//         border-radius: 8rpx;
//         font-size: 28rpx;
//         color: #ffffff;

//         :hover {
//           background-color: #3b82f6;
//         }
//       }
//     }
//   }
// }</style>
