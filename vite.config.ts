import { defineConfig } from 'vite';
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite'

import { configSvgIconsPlugin, configMockPlugin, configCompressPlugin, sanitizeFileName } from './build/vite/plugin/index'
const target = 'http://localhost:8088'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  // loadEnv() 根据 mode 检查 root(项目根路径) 路径下 .env、.env.development 环境文件，输出 NODE_ENV 和 VITE_ 开头的键值队
  const env = loadEnv(mode, root)
  const isDevelopment = mode === 'development'
  const prodMock = true
  console.log("ConfigEnv:", root, env, command, mode, isDevelopment)
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

    build: {
      // 设置最终构建的浏览器兼容目标
      // target: 'es2015',
      // minify: 'esbuild',
      // 构建后是否生成 source map 文件(用于线上报错代码报错映射对应代码)
      sourcemap: false,
      // cssTarget: 'chrome80',
      // 指定输出路径（相对于 项目根目录)
      outDir: 'dist',
      // 只有 minify 为 terser 的时候, 本配置项才能起作用
      // terserOptions: {
      //   compress: {
      //     // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
      //     keep_infinity: true,
      //     // 打包是否自动删除 console
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // 启用/禁用 gzip 压缩大小报告
      // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      reportCompressedSize: true,
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        // 静态资源分类打包
        output: {
          //  处理GitHubPages 部署 _plugin-vue_export-helper.js 404 
          sanitizeFileName,
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          // // 将 node_modules 三方依赖包最小化拆分
          // manualChunks(id) {
          //   if (id.includes('node_modules') && !id.includes('@antv')) {
          //     const paths = id.toString().split('node_modules/')
          //     if (paths[2]) {
          //       return paths[2].split('/')[0].toString()
          //     }

          //     return paths[1].split('/')[0].toString()
          //   }
          // },

        },
      },
    },
  }
};
