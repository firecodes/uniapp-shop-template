
import type { IHomeCategory, IHomeHotRecommend } from '@/types/home'

/**
 * @description 获取首页分类数据
 * @returns
 */
export const getHomeCategoryAPI = () => {
	return get<IHomeCategory[]>({
		url: '/home/category/mutli'
	})
}

/**
 * @description:首页热门推荐
 * @return {*}
 */
export const getHomeHotRecommendAPI = () => {
	return get<IHomeHotRecommend[]>({
		url: '/home/hot/mutli'
	})
}
