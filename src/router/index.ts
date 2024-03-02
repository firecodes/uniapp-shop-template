import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useRouteStoreWidthOut } from '@/store/modules/route'

import { ErrorPageRoute, LoginRoute, RootRoute } from '@/router/base'
import { createRouterGuards } from '@/router/router-guards'
import routeModuleList from '@/router/modules'

// 菜单

// 普通路由
export const constantRouter: RouteRecordRaw[] = [LoginRoute, RootRoute, ErrorPageRoute]

const routeStore = useRouteStoreWidthOut()
routeStore.setMenus(routeModuleList)
routeStore.setRouters(constantRouter.concat(routeModuleList))

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter.concat(...routeModuleList),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
