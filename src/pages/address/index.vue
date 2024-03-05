<template>
    <AppProvider class="flex flex-col p-5 content">
        <nut-address-list :data="data" swipe-edition show-bottom-button @edit-icon="editClick" @del-icon="delClick"
            @click-item="clickItem" @swipe-del="delClickSwipe" @add="addAddress" :options="dataOptions">
        </nut-address-list>
    </AppProvider>
</template>

<script lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
export default {
    components: {
        AppProvider
    },
    setup() {
        const router = useRouter();
        const data = ref([{
            testid: 3,
            testaddressName: '姓名',
            phone: '123****4567',
            defaultAddress: false,
            fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
        },
        {
            testid: 4,
            testaddressName: '姓名',
            phone: '123****4567',
            defaultAddress: true,
            fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
        }]);
        const dataOptions = reactive({
            id: 'testid',
            addressDetail: 'testaddressDetail',
            addressName: 'testaddressName'
        });
        const clickItem = () => {
            console.log('Click To Address');
        }
        const editClick = () => {
            console.log('Click To Edit');
            router.push({ path: '/pages/addressManage/index', query: { key: 'edit', page: '1', limit: '15' } });
        }
        const delClick = () => {
            console.log('Click To Delete');
        }
        const delClickSwipe = () => {
            console.log('Click On DelClickSwipe');
        };
        const addAddress = () => {
            console.log('Click To Add');
            // , query: { type: 'edit', addressId: item.id, from: state.from  }
            // navTo('/pages/addEditAddress/index')
            // navTo('/pages/about/index')
            router.push({ path: '/pages/addressManage/index', query: { key: 'add', page: '1', limit: '15' } });
        }
        const navTo = (url) => {
            uni.navigateTo({ url });
        }
        const jumpList1 = () => {
            // router.push('/pagesA/list/test1/index11?key=words&page=1&limit=15');
        };
        return {
            data,
            clickItem,
            delClick,
            editClick,
            delClickSwipe,
            addAddress,
            dataOptions
        };
    }
};
</script>