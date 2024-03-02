<template>
  <div class="h-screen flex flex-col ">
    <indexHeader></indexHeader>
    <div class="w-full bg-fff">
      <van-tabs v-model:active="activeName">
        <van-tab title="手游" name="a">
          <tabPanelIndexBar v-if="activeName == 'a'"></tabPanelIndexBar>
        </van-tab>
        <van-tab title="端游" name="b">
          <tabPanelIndexBar v-if="activeName == 'b'"></tabPanelIndexBar>
        </van-tab>
      </van-tabs>
    </div>
    <div class="mb-4 w-full bg-fff"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useDesignSettingStore } from '@/store/modules/designSetting'
import SvgIcon from '@/components/SvgIcon.vue'
import { useGlobSetting } from '@/hooks/setting'
import indexHeader from "./header.vue";
import tabPanelIndexBar from "./tabPanelIndexBar.vue";

defineOptions({
  name: 'gameList',
})

const designStore = useDesignSettingStore()
const globSetting = useGlobSetting()
const activeName = ref('a');
const activeRecord = ref('a');
const activeName2 = ref('a');
const activeName3 = ref('a');
const activeName4 = ref('a');
const activeName5 = ref('a');
const activeName6 = ref('a');
const activeName7 = ref('a');


const { title } = globSetting


const themeGridVars = reactive({
  'grid-item-content-background': '#fff',

  //   --van-grid-item-content-padding	var(--van-padding-md) var(--van-padding-xs)	-
  // --van-grid-item-content-background	var(--van-background-2)	-
  // --van-grid-item-content-active-color	var(--van-active-color)	-
  // --van-grid-item-icon-size	28px	-
  // --van-grid-item-text-color	var(--van-text-color)	-
  // --van-grid-item-text-font-size	var(--van-font-size-sm)	-
});
</script>

<style scoped lang="less"></style>
