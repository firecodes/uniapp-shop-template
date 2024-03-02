import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import routeModuleList from '@/router/modules'

// 普通路由
const allRouter = routeModuleList
const emptyRouter: any = []

const router = createRouter({
  history: createWebHashHistory(''),
  routes: emptyRouter.concat(...allRouter),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})


export default router
