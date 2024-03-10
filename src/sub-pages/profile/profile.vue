<script setup lang="ts">
import type { IProfile } from '@/types/profile'

getUserProfileData()

/**
 * 获取用户信息
 */
const profileData = ref<IProfile>({} as IProfile)
async function getUserProfileData() {
	const { result } = await getUserProfileAPI()
	profileData.value = result
}
</script>

<template>
	<profile-avatar />
	<profile-edit :profile="profileData" />
</template>

<style lang="scss">
page {
	background-color: #f4f4f4;
}
</style>
