import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // base: VITE_PUBLIC_PATH,
  // root,
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    UnoCSS(),
  ],
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
    open: true,
    // 服务端口号
    port: 8088,
    // proxy: {
    //     '/api': {
    //         target: '',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, '/api/v1')
    //     }
    // }
  },
});
