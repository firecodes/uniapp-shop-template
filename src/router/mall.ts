import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/mall/index.vue')
const routeModuleList: Array<RouteRecordRaw> = [{
  path: '/vue',
  name: 'vue',
  redirect: '/vue/index',
  component: Layout,
  meta: {
    hiddenHeader: true
  },
  children: [{
    path: 'index',
    name: 'vueHome',
    meta: {
      title: '首页', icon: 'wap-home', innerPage: true, keepAlive: false, hiddenHeader: true
    },
    component: () => import('@/page/home/index.vue'),
  }, {
    path: '/vue/gameList',
    name: 'gameList',
    meta: { title: '我要买', icon: 'wap-home', innerPage: true, keepAlive: false, hiddenHeader: true },
    component: () => import('@/page/gameList/index.vue'),
  }, {
    path: '/vue/sell-home',
    name: 'sell-home',
    meta: { title: '首页', icon: 'wap-home', innerPage: true, keepAlive: false, hiddenHeader: true },
    component: () => import('@/page/sell-home/index.vue'),
  }, {
    path: '/vue/message',
    name: 'message',
    meta: { title: '消息', icon: 'wap-home', innerPage: true, keepAlive: false, hiddenHeader: true },
    component: () => import('@/page/message/index.vue'),
  }, {
    path: '/vue/center',
    name: 'center',
    meta: { title: '个人中心', icon: 'wap-home', innerPage: true, keepAlive: false, hiddenHeader: false },
    component: () => import('@/page/center/index.vue'),
  }]
}]
export default routeModuleList
