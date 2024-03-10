

import type { ICategoryResult } from '@/types/category'

/**
 * 获取分类数据
 * @returns
 */
export const getCategroyDataAPI = () => {
	return get<ICategoryResult[]>({
		url: '/category/top'
	})
}
