<script setup lang="ts">
import BasicButton from '@/components/BasicButton/index.vue';
import AppProvider from '@/components/AppProvider/index.vue';
import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
import { judgePlatform } from '@/utils/platform';
import Iconify from '@/components/Iconify/index.vue';
import { getEnvValue } from '@/utils/env';

const appTitle = getEnvValue<string>('VITE_APP_TITLE');

const title = ref(appTitle);

const platform = CURRENT_PLATFORM;

const isVue3 = judgePlatform(PLATFORMS.VUE3);

const router = useRouter();
const handleGetStarted = () => {
    router.pushTab({ path: '/pages/demo/index' });
};
</script>

<template>
    <AppProvider>
        <view class="content">


            <view style="padding: 20px;">
                <!-- 以下形式在微信小程序会无效，APP和H5有效  -->
                <u-button class="custom-style" text="雪月夜"></u-button>
                <up-button type="primary" text="确定"></up-button>
                <up-button type="primary" :plain="true" text="镂空"></up-button>
                <up-button type="primary" :plain="true" :hairline="true" text="细边"></up-button>
                <u-icon name="photo" color="#2979ff" size="28"></u-icon>
                <up-image src="https://cdn.uviewui.com/uview/album/1.jpg" mode="widthFix"></up-image>
                <up-text type="primary" text="主色"></up-text>
                <up-text type="error" text="错误"></up-text>
                <up-text type="success" text="成功"></up-text>
                <up-text type="warning" text="警告"></up-text>
                <up-text type="info" text="信息"></up-text>
                <u-cell-group>
                    <u-cell icon="setting-fill" title="个人设置"></u-cell>
                    <u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
                </u-cell-group>
            </view>
            <image class="logo" src="/static/svg/LOGO.svg" />
            <view class="text-area">
                <text class="">{{ title }}</text>
            </view>
            <view class="text-area">
                <text class="">是否是Vue3: {{ isVue3 }}</text>
            </view>
            <view class="text-area">
                <text class="_u_text-red">当前平台: {{ platform }}</text>
            </view>
            <BasicButton @click="handleGetStarted">Get Started → </BasicButton>
            <view class="_u_text-red">uno css</view>
            <Iconify icon="i-ph-anchor-simple-thin" size="65" />
            <Iconify icon="i-system-uicons-book-text" />
            <Iconify icon="i-system-uicons-battery-full" size="65" />
            <Iconify icon="i-system-uicons-box-add" :size="65" />
            <Iconify icon="i-system-uicons-bell-snooze" color="red" :size="65" />
        </view>
    </AppProvider>
</template>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin: 280rpx auto 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
    margin-bottom: 60rpx;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
