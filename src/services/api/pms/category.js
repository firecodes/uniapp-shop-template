import request from '@/utils/http/request'

export function getCategoryList(parentId) {
	return request({
		url: '/mall-pms/app-api/v1/categories',
		method: 'get',
		params: {
			parentId: parentId
		}
	})
}
