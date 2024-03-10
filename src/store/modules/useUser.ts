
import { defineStore } from 'pinia'
import type { ILoginInfo } from '@/types/login'

export const useUserStore = defineStore(
	'user',
	() => {
		const user = ref<ILoginInfo>()
		const setUser = (info: ILoginInfo) => {
			user.value = info
		}

		return {
			user,
			setUser
		}
	},
	{
		persist: true
	}
)
