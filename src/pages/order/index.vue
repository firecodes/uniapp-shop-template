<template>
  <nut-tabs v-model="state.tab4value" title-scroll title-gutter="10">
    <nut-tab-pane v-for="item in state.list4" :title="'Tab ' + item">
      Tab {{ item }}
    </nut-tab-pane>
  </nut-tabs>
</template>

<script lang="ts">
export default {
  setup() {
    const state = reactive({
      tab4value: '0',
      list4: Array.from(new Array(10).keys()),
    });
    return { state };
  }
};
</script>