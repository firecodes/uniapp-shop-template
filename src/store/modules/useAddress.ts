import type { IAddress } from '@/types/address'


export const useAddressStore = defineStore(
	'address',
	() => {
		const address = ref<IAddress>()
		const addressList = ref<IAddress[]>()

		const setAddress = (payload: IAddress | undefined) => {
			address.value = payload
		}

		const getAddressListData = async () => {
			const res = await getAddressListAPI()
			addressList.value = res.result
			setAddress(addressList.value.find((item) => item.isDefault))
		}
		return {
			address,
			addressList,
			setAddress,
			getAddressListData
		}
	},
	{
		persist: true
	}
)
