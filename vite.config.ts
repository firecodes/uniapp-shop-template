import { defineConfig } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite'

import { configSvgIconsPlugin, configMockPlugin, configCompressPlugin } from './build/vite/plugin/index'
const target = 'http://localhost:8088'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  // loadEnv() 根据 mode 检查 root(项目根路径) 路径下 .env、.env.development 环境文件，输出 NODE_ENV 和 VITE_ 开头的键值队
  const env = loadEnv(mode, root)
  const isDevelopment = mode === 'development'
  const prodMock = true
  console.log("ConfigEnv:", env, command, mode, isDevelopment)
  return {
    base: './',
    // root,
    plugins: (() => {
      const list = [
        vue(),
        Components({
          resolvers: [VantResolver()],
        }),
        UnoCSS(),
        configSvgIconsPlugin(true),
        configMockPlugin(!isDevelopment, prodMock)
        // configCompressPlugin('none', true)
      ]
      return list
    })(),
    resolve: {
      alias: [{
        find: /\@\//,
        replacement: `${resolve(__dirname, 'src')}/`,
      },
      {
        find: /\#\//,
        replacement: `${resolve(__dirname, 'types')}/`
      }]
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          // 注入全局 less 变量
          additionalData: `@import "src/assets/styles/var.less";`,
        },
      },
    },
    // 定义全局常量替换方式
    define: {
      // 在生产中 启用/禁用 intlify-devtools 和 vue-devtools 支持，默认值 false
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    server: {
      host: true,
      // 服务启动时是否自动打开浏览器
      open: false,
      // 服务端口号
      port: 8088,
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api')
        }
      }
    },
  }
};
