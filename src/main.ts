
import 'virtual:uno.css'
// https://unocss.dev/guide/style-reset#tailwind-compat
// 此重置基于 Tailwind 重置，减去按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请参阅链接的问题。
import '@unocss/reset/tailwind-compat.css'
// Register icon sprite --本地SVG图标
import 'virtual:svg-icons-register'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'

// import '@/assets/styles/index.less'


import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/lang/index'


async function bootstrap() {
  const app = createApp(App)
  // 路由准备就绪后挂载APP实例
  app.use(i18n).mount('#app', true)
}

void bootstrap()

