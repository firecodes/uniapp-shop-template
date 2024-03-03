<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useAuthStore } from '@/state/modules/auth';
onLaunch(() => {
    console.log('App Launch');
});
onShow(() => {
    const authStore = useAuthStore();
    authStore.initToken();
    // let userInfo = uni.getStorageSync('userInfo') || '';
    // if (userInfo.id) {
    //     //更新登陆状态
    //     uni.getStorage({
    //         key: 'userInfo',
    //         success: (res) => {
    //             this.login(res.data);
    //         }
    //     });
    // }
    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
