<script lang="ts" setup name="AppProvider">
const route = useRoute()
const state = reactive({
    barValue: '',
});
// uni.$u.queryParams
// // 无参数
// uni.$u.route('/pages/components/empty/index');
console.log("AppProvider:", uni.$u, route)

// // 带参数
// uni.$u.route('/pages/components/empty/index', {
// 	name: 'lisa',
// 	age: 20
// });
const constructFunc = (() => {
    const tabbarList = markRaw([
        {
            icon: '/static/tabbar/icon_index_default.png',
            selectIcon: '/static/tabbar/icon_index_selected.png',
            path: '/pages/index/index',
            position: 'other',
            text: 'tab1',
            keep: false,
            hidden: false,
            index: 0
        },
        {
            icon: '/static/tabbar/icon_group_default.png',
            selectIcon: '/static/tabbar/icon_group_selected.png',
            path: '/pages/buy/index',
            position: 'other',
            text: 'tab2',
            keep: false,
            hidden: false,
            index: 1
        },
        {
            icon: '/static/tabbar/icon_publish.png',
            selectIcon: '',
            path: '/pages/sell/index',
            position: 'center',
            text: '',
            keep: false,
            hidden: false,
            index: 2
        },
        {
            icon: '/static/tabbar/icon_template_default.png',
            selectIcon: '/static/tabbar/icon_template_selected.png',
            path: '/pages/message/index',
            position: 'other',
            text: 'tab4',
            keep: false,
            hidden: false,
            index: 3
        },
        {
            icon: '/static/tabbar/icon_user_default.png',
            selectIcon: '/static/tabbar/icon_user_selected.png',
            path: '/pages/my/index',
            position: 'other',
            text: 'tab5',
            keep: false,
            hidden: false,
            index: 4
        }
    ]);
    const tabbarChange = (name: any): void => {
        const item = tabbarList[name]
        // uni.$u.route(item.path);
        uni.switchTab({ url: item.path });
    }
    const tabbarActive = (): void => {
        const index = tabbarList.findIndex((item) => { return route.path == item.path })
        if (index > -1) {
            state.barValue = index
        }
    }
    return {
        tabbarList,
        tabbarChange,
        tabbarActive
    }
})()
constructFunc.tabbarActive()
</script>

<template>
    <view class="page">
        <slot></slot>
        <view class="my-tab-bar">
            <u-tabbar class="" :value="state.barValue" activeColor="#d81e06" :placeholder="false"
                @change="constructFunc.tabbarChange" :fixed="true" :safeAreaInsetBottom="true">
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
    overflow: auto;
}

.my-tab-bar {
    // height: 50px;

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
