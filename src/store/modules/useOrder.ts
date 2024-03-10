
export const useOrderStore = defineStore(
	'order',
	() => {
		const currentType = ref('0')

		const setCurrentType = (type: string) => {
			currentType.value = type
		}

		return {
			currentType,
			setCurrentType
		}
	},
	{
		persist: true
	}
)
