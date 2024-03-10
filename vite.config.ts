
// Vite中文网：https://vitejs.cn/config/
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'


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
			'process.env': {}
			//	ROUTES: new TransformPages().routes,
		},
		server: {
			host: true,
			// open: true,
			// port: env.VITE_PORT as any,
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
			// outDir: 'dist',
			outDir: 'dist-uniapp-test-mall',
			chunkSizeWarningLimit: 1500,
			// sourcemap: false,
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
		plugins: [
			/**
			 * unocss
			 * @see https://github.com/antfu/unocss
			 * see unocss.config.ts for config
			 */
			Unocss(),
			// https://github.com/antfu/unplugin-auto-import
			AutoImport({
				imports: ['vue', 'uni-app', 'pinia'],
				dts: 'src/types/auto-imports.d.ts',
				// dts: true,
				dirs: [
					'src/composables/**',
					'src/store/**',
					'src/api/**',
					'src/utils/**',
					'src/components/**',
					'src/constants/**',
					'src/types/**'
				],
				// eslintrc: {
				// 	enabled: true,
				// },				
				vueTemplate: true
			}),
			/**
			 * unplugin-vue-components 按需引入组件
			 * 注意：需注册至 uni 之前，否则不会生效
			 * @see https://github.com/antfu/vite-plugin-components
			 */
			Components({
				dts: 'src/components.d.ts',
				deep: true,
				dirs: ['src/components', 'src/pages/**/components', 'src/sub-pages/**/components']
			}),
			uni()
		]
	};
};
