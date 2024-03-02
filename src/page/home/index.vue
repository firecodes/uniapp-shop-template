<template>
  <div class="h-screen flex flex-col ">
    <div class="w-full">
      <appdownload></appdownload>
      <indexHeader></indexHeader>
    </div>
    <div class="w-full">
      <van-swipe class="h-30" :autoplay="3000" :indicator-color="designStore.appTheme">
        <van-swipe-item v-for="(text, index) in getSwipeText" :key="index"
          class="text-center text-gray-700 leading-relaxed dark:text-gray-400">
          <!-- <p class="text-lg">
            {{ text.title }}
          </p>
          <p class="text-sm">
            {{ text.details }}
          </p> -->
          <img :src="text.src">
        </van-swipe-item>
      </van-swipe>
      <van-config-provider :theme-vars="themeGridVars">
        <van-grid :column-num="4" class="bg-fff" :border="false">
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
      </van-config-provider>
    </div>
    <div class="mt-2 w-full bg-fff">
      <van-tabs v-model:active="activeName">
        <van-tab title="热门手游" name="a">
          <tabPanel></tabPanel>
        </van-tab>
        <van-tab title="热门端游" name="b">
          <tabPanel></tabPanel>
        </van-tab>
      </van-tabs>
    </div>
    <div class="mt-2 w-full bg-fff">
      <van-tabs v-model:active="activeRecord">
        <van-tab title="浏览历史" name="a">
          <tabPanel class="a"></tabPanel>
        </van-tab>
      </van-tabs>
    </div>
    <div class="mt-2 w-full bg-fff">
      <van-tabs v-model:active="activeName4">
        <van-tab title="浏览记录" name="a">
          <tabRecord class="a"></tabRecord>
        </van-tab>
      </van-tabs>
    </div>
    <div class="mt-2 w-full bg-fff">
      <van-tabs v-model:active="activeName2">
        <van-tab title="帐号推荐" name="a">
          <tabGames class="a"></tabGames>
        </van-tab>
      </van-tabs>
    </div>
    <div class="mt-2 w-full bg-fff">
      <van-tabs v-model:active="activeName3">
        <van-tab title="问题反馈" name="a">
          <van-grid :column-num="3" direction="horizontal" class="bg-fff" :border="true">
            <van-grid-item icon="photo-o" text="咨询" />
            <van-grid-item icon="photo-o" text="投诉" />
            <van-grid-item icon="photo-o" text="建议" />
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
    <layoutVersion></layoutVersion>
    <div class="mb-4 w-full bg-fff"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useDesignSettingStore } from '@/store/modules/designSetting'
import SvgIcon from '@/components/SvgIcon.vue'
import { useGlobSetting } from '@/hooks/setting'
import appdownload from "./appdownload.vue";
import indexHeader from "./header.vue";
// import tabPanel from "./tabPanel.vue";
// import tabRecord from "./tabRecord.vue";
// import tabGames from "./tabGames.vue";


defineOptions({
  name: 'DashboardPage',
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

const getSwipeText = computed(() => {
  return [
    {
      title: '💡 最新技术栈',
      details: '基于Vue3、Vant4、Vite、TypeScript、UnoCSS等最新技术栈开发',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '✨ 零配置 ESlint',
      details: '使用 Git Hook 进行 Lint Commit，规范化提交',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '🌠 使用最新的 <script setup> 语法',
      details: 'Vue 3.4+ 最新语法',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '⚡️ 轻量快速的热重载',
      details: '无论应用程序大小如何，都始终极快的模块热重载（HMR）',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '🔩 主题配置',
      details: '具备主题配置及黑暗主题适配，且持久化保存',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '🛠️ 丰富的 Vite 插件',
      details: '集成大部分 Vite 插件，无需繁琐配置，开箱即用',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '📊 内置 useEcharts hooks',
      details: '满足大部分图表展示，只需要写你的 Options',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
    {
      title: '🥳 完善的登录系统、路由、Axios配置',
      details: '所有基础设施已搭建完毕，你可以直接开发你的业务需求',
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    },
  ]
})

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
