import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useRouteStoreWidthOut } from '@/store/modules/route'

import { ErrorPageRoute, LoginRoute, RootRoute } from '@/router/base'
import { createRouterGuards } from '@/router/router-guards'
import routeModuleList from '@/router/modules'
import routeMallList from '@/router/mall'

// 普通路由
export const constantRouter: RouteRecordRaw[] = [LoginRoute, RootRoute, ErrorPageRoute]
const allRouter = constantRouter.concat(routeModuleList).concat(routeMallList)
const emptyRouter: any = []
//  constantRouter.concat(...routeModuleList).concat(...routeMallList)
const routeStore = useRouteStoreWidthOut()
routeStore.setMenus(routeModuleList)
routeStore.setMallMenus(routeMallList)
routeStore.setRouters(allRouter)

const router = createRouter({
  history: createWebHashHistory(''),
  routes: emptyRouter.concat(...allRouter),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
