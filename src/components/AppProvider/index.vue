<script lang="ts" setup name="AppProvider">
const state = reactive({
    barValue: '',
});
const barChage = (name) => {
    state.barValue = name
}
</script>

<template>
    <view class="page">
        <slot></slot>
        <view class="my-tab-bar">
            <u-tabbar class="" :value="state.barValue" activeColor="#d81e06" :placeholder="false" @change="barChage"
                :fixed="true" :safeAreaInsetBottom="true">
                <u-tabbar-item text="首页" icon="home" dot></u-tabbar-item>
                <u-tabbar-item text="买号" icon="photo" badge="3"></u-tabbar-item>
                <u-tabbar-item text="卖号" icon="play-right"></u-tabbar-item>
                <u-tabbar-item text="消息" icon="play-right">
                    <!-- <template #active-icon>
                        <image class="u-page__item__slot-icon"
                            src="https://cdn.uviewui.com/uview/common/bell-selected.png"></image>
                    </template>

<template #inactive-icon>
                        <image class="u-page__item__slot-icon" src="https://cdn.uviewui.com/uview/common/bell.png">
                        </image>
                    </template> -->
                </u-tabbar-item>
                <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
            </u-tabbar>
        </view>
    </view>
</template>

<style lang="scss">
.page {
    position: initial;
}

.my-tab-bar {
    height: 50px;

    .u-tabbar {
        // display: flex;
        // position: fixed;
        // bottom: 0;
        // left: 0;
        // width: 100%;
        // z-index: 998;
        // box-sizing: initial;
        // height: 65px !important;
        z-index: 1999 !important;
    }

    // .u-tabbar-item {
    //     padding: 10px 0 !important;
    // }
}

.u-page__item__slot-icon {
    width: 17px;
    height: 17px;
}
</style>
