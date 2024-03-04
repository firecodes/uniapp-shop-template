<template>
    <AppProvider>
        <nut-empty image="//s.yezgea02.com/1604028375097/empty-car.png" description="购物车空空如也"></nut-empty>
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