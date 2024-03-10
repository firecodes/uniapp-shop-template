
import type AppGuessLike from '@/components/app-guess-like/app-guess-like.vue'

export default function () {
	const appGuessLikeRef = ref<InstanceType<typeof AppGuessLike>>()

	function getMore() {
		appGuessLikeRef.value?.getGuessLikeData()
	}

	function refreshData() {
		return appGuessLikeRef.value?.refreshData
	}

	return {
		appGuessLikeRef,
		getMore,
		refreshData
	}
}
