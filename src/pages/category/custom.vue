<template>
    <nut-category @change="changeCustom">
        <nut-category-pane type="custom" :customCategory="customCategory" @onChange="changeCustom">
        </nut-category-pane>
    </nut-category>
</template>

<script lang="ts">
import { categoryInfo, categoryChild, customCategory } from './data.json';

export default {
    setup() {
        const data = reactive({
            customCategory: [{}],
        });
        onMounted(() => {
            setTimeout(() => {
                getData();
            }, 500);
        });
        const getData = () => {
            console.log('点击getData')
        };
        const changeCustom = () => {
            console.log('点击分类数据')
        };
        return {
            changeCustom,
            ...toRefs(data)
        }
    }
};
</script>