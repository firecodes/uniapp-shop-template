<script setup lang="ts">
const { appGuessLikeRef, getMore } = useAppGuessLike()
onReachBottom(() => {
	getMore()
})
</script>

<template>
	<user-header />
	<view class="mt-2 px-2">
		<app-guess-like ref="appGuessLikeRef" />
	</view>
</template>

<style lang="scss">
page {
	background-color: $app-bg-color;
}
</style>
