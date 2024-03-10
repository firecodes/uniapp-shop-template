

import type { IHotData, IHotQuery } from '@/types/hot'

/**
 * 获取热门推荐详情数据
 * @param url
 * @param data
 * @returns
 */
export const getHotDataAPI = (url: string, data?: IHotQuery) => {
	return get<IHotData>({
		url,
		data
	})
}
