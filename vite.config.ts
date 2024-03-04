// Vite中文网：https://vitejs.cn/config/
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import Unocss from 'unocss/vite';
import TransformPages from 'uni-read-pages-vite'; // vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';

import Components from '@uni-helper/vite-plugin-uni-components';
import { NutResolver } from 'nutui-uniapp';

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	return {
		base: './',
		// 设置路径别名
		resolve: {
			alias: {
				'@': resolve('./src'),
			},
			extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
		},
		// 自定义全局变量
		define: {
			'process.env': {},
			ROUTES: new TransformPages().routes,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "nutui-uniapp/styles/variables.scss";',
				},
			},
		},
		// 开发服务器配置
		server: {
			host: true,
			// open: true,
			port: env.VITE_PORT as any,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
				'/upload': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/upload/, ''),
				},
			},
		},
		// 构建配置
		build: {
			outDir: 'dist',
			chunkSizeWarningLimit: 1500,
			rollupOptions: {
				output: {
					entryFileNames: `assets/[name].${new Date().getTime()}.js`,
					chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
					assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
					compact: true,
					// manualChunks: {
					//     vue: ['vue', 'vue-router', 'vuex'],
					//     echarts: ['echarts'],
					// },
					// TODO: 处理GitHub Pages 部署 _plugin-vue_export-helper.js 404
					// https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
					sanitizeFileName(name: any) {
						const match = DRIVE_LETTER_REGEX.exec(name)
						const driveLetter = match ? match[0] : ''
						// A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
						// Otherwise, avoid them because they can refer to NTFS alternate data streams.
						return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
					},
				},
			},
		},
		// 插件
		plugins: [
			Components({
				resolvers: [NutResolver()],
				dirs: ["src/components", "src/**/components"],
				dts: 'typings/components.d.ts',
			}),
			// 自动导入
			AutoImport({
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
				],
				imports: [
					'vue',
					'uni-app',
					'pinia',
					{
						'uni-mini-router': ['useRouter', 'useRoute'],
					},
				],
				dts: 'typings/auto-imports.d.ts',
				eslintrc: {
					enabled: true,
				},
			}),
			uni(),
			Unocss(),
		],
	};
};