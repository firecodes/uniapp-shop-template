<script setup lang="ts">
import type { IHomeHotRecommend } from '@/types/home'

defineProps<{
	recommends: IHomeHotRecommend[]
}>()

function goToRecommend(index: number) {
	uni.navigateTo({
		url: `/pages/hot/hot?type=${index}`
	})
}
</script>

<template>
	<view class="home-recommend grid grid-cols-2 gap-2 bg-white py-3">
		<view v-for="(recommend, index) in recommends" :key="recommend.id" @click="goToRecommend(index + 1)">
			<view class="mb-1">
				<text class="text-lg font-bold ml-2 mr-3">{{ recommend.title }}</text>
				<text class="text-gray-400">{{ recommend.alt }}</text>
			</view>
			<view class="around">
				<image class="h-20 w-20" :src="pic" v-for="pic in recommend.pictures" :key="pic" />
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss"></style>
