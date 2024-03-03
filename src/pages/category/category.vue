<script lang="ts" setup>
import { onLoad, onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { getCategoryList } from '@/services/api/pms/category.js';

const sizeCalcState = ref(false);
const tabScrollTop = ref(0);
const currentId = ref(0);
const flist = ref([]);
const slist = ref([]);
const tlist = ref([]);


const loadData = () => {
    getCategoryList().then(response => {
        const categoryList = response.data;
        categoryList.forEach(first => {
            flist.value.push(first);
            if (first.children) {
                first.children.forEach(second => {
                    slist.value.push(second);
                    if (second.children) {
                        second.children.forEach(third => {
                            tlist.value.push(third);
                        });
                    }
                });
            }
        });
        // 排序
        flist.value.sort(function (a, b) {
            return a.id - b.id;
        });

        slist.value.sort(function (a, b) {
            if (a.parentId == b.parentId) {
                return a.id - b.id;
            } else {
                return a.parentId - b.parentId;
            }
        });

        tlist.value.sort(function (a, b) {
            if (a.parentId == b.parentId) {
                return a.id - b.id;
            } else {
                return a.parentId - b.parentId;
            }
        });

        currentId.value = flist.value[0].id;
    });
}
//一级分类点击
const tabtap = (item) => {
    if (!sizeCalcState.value) { calcSize(); }
    currentId.value = item.id;
    let index = slist.value.findIndex(sitem => sitem.parentId == item.id);
    tabScrollTop.value = slist.value[index].top;
}
//右侧栏滚动
const asideScroll = (e) => {
    if (!sizeCalcState.value) {
        calcSize();
    }
    let scrollTop = e.detail.scrollTop;
    let tabs = slist.value.filter(item => item.top <= scrollTop).reverse();
    if (tabs.length > 0) {
        currentId.value = tabs[0].parentId;
    }
}
//计算右侧栏每个tab的高度等信息
const calcSize = () => {
    let h = 0;
    slist.value.forEach(item => {
        let view = uni.createSelectorQuery().select('#main-' + item.id);
        view.fields({ size: true }, data => {
            item.top = h;
            h += data.height;
            item.bottom = h;
        }).exec();
    });
    sizeCalcState.value = true;
}
const navToList = (sid, tid) => {
    uni.navigateTo({
        url: `/pages/product/list?fid=${currentId.value}&sid=${sid}&tid=${tid}`
    });
}

onLaunch(() => {
});
onLoad(() => {
    loadData()
});
onHide(() => {
});

</script>

<template>
    <view class="content">
        <scroll-view scroll-y class="left-aside">
            <view v-for="item in flist" :key="item.id" class="f-item b-b" :class="{ active: item.id == currentId }"
                @click="tabtap(item)">{{ item.name }}</view>
        </scroll-view>
        <scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll"
            :scroll-top="tabScrollTop">
            <view v-for="item in slist" :key="item.id" class="s-list" :id="'main-' + item.id">
                <text class="s-item">{{ item.name }}</text>
                <view class="t-list">
                    <template v-for="titem in tlist" :key="titem.id">
                        <view @click="navToList(item.id, titem.id)" v-if="titem?.parentId === item?.id" class="t-item">
                            <image :src="titem.iconUrl"></image>
                            <text>{{ titem.name }}</text>
                        </view>
                    </template>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<style lang="scss" scoped>
page,
.content {
    height: 100%;
    background-color: #f8f8f8;
}

.content {
    display: flex;
}

.left-aside {
    flex-shrink: 0;
    width: 200upx;
    height: 100%;
    background-color: #fff;
}

.f-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100upx;
    font-size: 28upx;
    color: $font-color-base;
    position: relative;

    &.active {
        color: $base-color;
        background: #f8f8f8;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 36upx;
            width: 8upx;
            background-color: $base-color;
            border-radius: 0 4px 4px 0;
            opacity: 0.8;
        }
    }
}

.right-aside {
    flex: 1;
    overflow: hidden;
    padding-left: 20upx;
}

.s-item {
    display: flex;
    align-items: center;
    height: 70upx;
    padding-top: 8upx;
    font-size: 28upx;
    color: $font-color-dark;
}

.t-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding-top: 12upx;

    &:after {
        content: '';
        flex: 99;
        height: 0;
    }
}

.t-item {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 176upx;
    font-size: 26upx;
    color: #666;
    padding-bottom: 20upx;

    image {
        width: 140upx;
        height: 140upx;
    }
}
</style>
