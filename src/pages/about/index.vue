<template>
    <AppProvider class="about">
        <div class="about-body">
            <img class="intro-img" src="https://s.yezgea02.com/1604046067055/WechatIMG30231.jpeg" alt="">
            <nut-divider
                :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">简介</nut-divider>
            <div>Uniapp vue3 nutui Mall组件</div>
            <nut-divider
                :style="{ color: '#1baeae', borderColor: '#1baeae', fontSize: '20px', fontWeight: 500 }">开源地址</nut-divider>
            <div>
                <br />
                <div>github 地址：
                    <a target="_blank"
                        href="https://firecodes.github.io/uniapp-shop-template/">https://firecodes.github.io/uniapp-shop-template/</a>
                </div>
            </div>
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
        return {
            state
        }
    }
};
</script>

<style lang="scss" scoped>
.about {
    box-sizing: border-box;
    padding: 20px;

    .intro-img {
        width: 100%;
    }

    .about-body {
        font-size: 16px;

        a {
            color: #007fff;
        }
    }
}
</style>
