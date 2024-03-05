<template>
    <AppProvider class="flex flex-col p-5 content">
        <div class="w-full bg-fff ">
            <nut-skeleton title animated :avatar="true" row="3" avatarSize="60px" :loading="state.checked">
                <div class="container  pl-10 pb-10 pt-10">
                    <nut-avatar size="large">
                        <image
                            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
                    </nut-avatar>
                    <div class="right-content">
                        <div class="title">昵称：</div>
                        <div class="title">录名：</div>
                        <div class="title">个性签名：</div>
                    </div>
                </div>
            </nut-skeleton>
        </div>
        <div class="w-full">
            <nut-cell-group>
                <nut-cell icon="my" title="我的订单" @click="navTo('/pages/order/index')" is-link>
                    <template v-slot:icon>
                        <nut-icon name="dou-arrow-up" class="nut-icon-am-jump nut-icon-am-infinite"></nut-icon>
                        <nut-icon name="star-fill-n" class="nut-icon-am-blink nut-icon-am-infinite"></nut-icon>
                        <nut-icon name="refresh2" class="nut-icon-am-rotate nut-icon-am-infinite"></nut-icon>
                        <nut-icon name="heart-fill" class="nut-icon-am-breathe nut-icon-am-infinite"></nut-icon>
                        <nut-icon name="microphone" class="nut-icon-am-flash nut-icon-am-infinite"></nut-icon>
                        <nut-icon name="download" class="nut-icon-am-bounce nut-icon-am-infinite"></nut-icon>
                        <nut-icon name="message" class="nut-icon-am-shake nut-icon-am-infinite"></nut-icon>
                    </template>
                </nut-cell>
                <nut-cell icon="star" title="账号管理" @click="navTo('/pages/address/index')" is-link></nut-cell>
                <nut-cell icon="my" title="地址管理" @click="navTo('/pages/address/index')" is-link></nut-cell>
                <nut-cell icon="my" title="关于我们" @click="navTo('/pages/about/index')" is-link>

                    <template v-slot:icon>
                        <nut-icon name="dou-arrow-up" class="nut-icon-am-jump nut-icon-am-infinite"></nut-icon>
                    </template>
                </nut-cell>
            </nut-cell-group>
        </div>
        <div class="w-full ">
            <nut-cell-group>
                <nut-cell title="我的订单" is-link>

                    <template v-slot:icon>
                        <nut-icon name="message" class="nut-icon-am-shake nut-icon-am-infinite"></nut-icon>
                    </template>
                </nut-cell>
                <nut-cell title="账号管理" is-link url="https://m.jd.com"></nut-cell>
                <nut-cell title="地址管理" to="/" is-link></nut-cell>
                <nut-cell title="关于我们" @click="navTo('/pages/about/index')" is-link></nut-cell>
                <nut-cell title="关于我们" @click="navTo('/pages/about/index')" is-link></nut-cell>
            </nut-cell-group>
        </div>
        <div class="w-full ">
            <nut-cell-group>
                <nut-cell title="我的订单" is-link>

                    <template v-slot:icon>
                        <nut-icon name="message" class="nut-icon-am-shake nut-icon-am-infinite"></nut-icon>
                    </template>
                </nut-cell>
                <nut-cell title="账号管理" is-link url="https://m.jd.com"></nut-cell>
                <nut-cell title="地址管理" to="/" is-link></nut-cell>
                <nut-cell title="关于我们" @click="navTo('/pages/about/index')" is-link></nut-cell>
                <nut-cell title="关于我们" @click="navTo('/pages/about/index')" is-link></nut-cell>
            </nut-cell-group>
        </div>
        <div class="w-full ">
            <nut-cell-group>
                <nut-cell title="我的订单" is-link>

                    <template v-slot:icon>
                        <nut-icon name="message" class="nut-icon-am-shake nut-icon-am-infinite"></nut-icon>
                    </template>
                </nut-cell>
                <nut-cell title="账号管理" is-link url="https://m.jd.com"></nut-cell>
                <nut-cell title="地址管理" to="/" is-link></nut-cell>
                <nut-cell title="关于我们" @click="navTo('/pages/about/index')" is-link></nut-cell>
                <nut-cell title="关于我们" @click="navTo('/pages/about/index')" is-link></nut-cell>
            </nut-cell-group>
        </div>
    </AppProvider>
</template>

<script lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

export default {
    components: {
        AppProvider
    },
    setup() {
        const state = reactive({
            checked: false,
            list: [],
            all: false,
            result: [],
            checkAll: true
        })
        onMounted(async () => {
            state.checked = false
        })
        const goBack = () => {
        }
        const navTo = (url) => {
            console.log('跳转路径', url);
            uni.navigateTo({ url });
        }
        return {
            navTo,
            goBack,
            state
        }
    }
};
</script>

<style lang="scss">
.content {
    .container {
        display: flex;

        background: linear-gradient(90deg, #1baeae, #51c7c7);
        box-shadow: 0 2px 5px #269090;
        border-radius: 6px;

        .right-content {
            margin-left: 19px;
            font-family: PingFangSC;
            display: flex;
            flex-direction: column;

            .title {
                font-size: 16px;
                color: #fff;
                margin-top: 5px;
            }

            .desc {
                margin-top: 10px;
                font-size: 13px;
                color: rgba(154, 155, 157, 1);
            }
        }
    }
}
</style>