<template>
    <AppProvider>
        <nut-category :category="category" @change="change">
            <nut-category-pane :categoryChild="categoryChild" @onChange="onChange">
            </nut-category-pane>
            <nut-category-pane type="custom" :customCategory="customCategory" @onChange="changeCustom">
            </nut-category-pane>
        </nut-category>
    </AppProvider>
</template>

<script lang="ts">
import AppProvider from '@/components/AppProvider/index.vue';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { categoryInfo, categoryChild, customCategory } from './data.json';

export default {
    components: {
        AppProvider
    },
    setup() {
        const data = reactive({
            category: [{}],
            categoryChild: [{}],
            customCategory: [{}]
        });

        onMounted(() => {
            data.category = categoryInfo.category;
            data.categoryChild = categoryChild;
            data.customCategory = customCategory;
            console.log("当前分类数据", data, customCategory);
        });

        const change = (index: any) => {
            const list: any = data.category[index]
            console.log("当前分类数据", list, index);
            data.categoryChild = [].concat(list?.children as any);
        };
        const onChange = () => {
            console.log("当前分类数据");
        }
        const changeCustom = () => {
            console.log('点击分类数据')
        };
        return {
            onChange,
            change,
            changeCustom,
            ...toRefs(data)
        }
    }
};
</script>