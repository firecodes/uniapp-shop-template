import type { IProfile, IPutProfile, IPutProfileResult } from '@/types/profile'

/**
 * 获取用户资料
 * @returns
 */
export const getUserProfileAPI = () => {
	return get<IProfile>({
		url: '/member/profile'
	})
}

/**
 * 修改用户资料
 * @param data
 * @returns
 */
export const putUserProfileAPI = (data: IPutProfile) => {
	return put<IPutProfileResult>({
		url: '/member/profile',
		data
	})
}
