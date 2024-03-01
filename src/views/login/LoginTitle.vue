<template>
  <div class="flex flex-col items-center justify-center">
    <div class="logo enter-y mb-2 mt-8">
      <SvgIcon class="!h-30 !w-30" name="logo" />
      <!-- <Logo class="!h-30 !w-30"></Logo> -->
    </div>
    <div class="text-darkBlue dark:text-garyWhite enter-y mb-8 text-2xl font-black">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobSetting } from '@/hooks/setting'
import SvgIcon from '@/components/SvgIcon.vue'

const globSetting = useGlobSetting()

const { title } = globSetting
</script>

<style scoped lang="less"></style>
