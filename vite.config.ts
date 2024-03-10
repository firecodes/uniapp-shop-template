
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
