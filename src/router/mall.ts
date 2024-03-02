import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/mall/index.vue')
const routeModuleList: Array<RouteRecordRaw> = [{
  path: '/vue',
  name: 'vue',
  redirect: '/vue/index',
  component: Layout,
  meta: {
    title: '首页',
    icon: 'wap-home',
  },
  children: [{
    path: 'index',
    name: 'vueHome',
    meta: { keepAlive: false, },
    component: () => import('@/views/dashboard/index.vue'),
  }, {
    path: '/vue/gameList',
    name: 'gameList',
    meta: { keepAlive: false, },
    component: () => import('@/views/dashboard/index.vue'),
  }, {
    path: '/vue/sell-home',
    name: 'sell-home',
    meta: { keepAlive: false, },
    component: () => import('@/views/dashboard/index.vue'),
  }, {
    path: '/vue/message',
    name: 'message',
    meta: { keepAlive: false, },
    component: () => import('@/views/dashboard/index.vue'),
  }, {
    path: '/vue/center',
    name: 'center',
    meta: { keepAlive: false, },
    component: () => import('@/views/dashboard/index.vue'),
  }]
}]
export default routeModuleList
