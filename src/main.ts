
// import 'virtual:uno.css'
// https://unocss.dev/guide/style-reset#tailwind-compat
// 此重置基于 Tailwind 重置，减去按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请参阅链接的问题。
// import '@unocss/reset/tailwind-compat.css'
// // Register icon sprite --本地SVG图标
// import 'virtual:svg-icons-register'

// // import 'vant/es/toast/style'
// import 'vant/es/dialog/style'

// import '@/assets/styles/index.less'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

import App from './App.vue'
import 'lib-flexible/flexible'

import './assets/main.css'
import './common/style/theme.css'
import 'vant/es/toast/style'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url: any) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

app.mount('#app')
