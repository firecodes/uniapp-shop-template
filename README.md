<h1 align="center">Uniapp vue3 ts axios uni view</h1>

## 介绍
 Uniapp vue3 ts axios uni view 搭建项目模板

# 访问页面效果
<a href="https://firecodes.github.io/uniapp-shop-template/">Demo view </a>

# Uniapp分支版本
1. <a href="https://github.com/firecodes/uniapp-shop-template/tree/dev-uni-view">dev-uni-view </a>( https://github.com/firecodes/uniapp-shop-template/tree/dev-uni-view)
2. <a href="https://github.com/firecodes/uniapp-shop-template/tree/dev-nutui">dev-nutui </a>( https://github.com/firecodes/uniapp-shop-template/tree/dev-nutui)


# H5项目分支版本
1.  <a href="https://github.com/firecodes/uniapp-shop-template/tree/vue3-vant-ts-tempalte">ui 组件 vant </a> ( https://github.com/firecodes/uniapp-shop-template/tree/vue3-vant-ts-tempalte )
2.  <a href="https://github.com/firecodes/uniapp-shop-template/tree/vue3-vant-tempalte">游戏商城 demo </a> ( https://github.com/firecodes/uniapp-shop-template/tree/vue3-vant-tempalte )
3.  <a href=" https://github.com/firecodes/uniapp-shop-template/tree/vue-vant-mall-demo">mall-demo vant  </a>( https://github.com/firecodes/uniapp-shop-template/tree/vue-vant-mall-demo )

# 参考网站(H5)
1. 游戏交易商城 ( https://m.5173.com/ )  --ui 组件 vant
2. 移动积分商城 ( https://m.jf.10086.cn/ )  -- taro
3. 游戏交易商城2 ( https://m1.pxb7.com/pages/buy/index) --- uniapp 小程序

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm dev
```

### Compiles and minifies for production
```
pnpm build
```

## 所用技术栈

node 版本的自动切换
- 小程序框架： [uni-app](https://uniapp.dcloud.io/)
- 构建工具： [Vite](https://vitejs.dev/)
- 前端框架： [Vue3.x](https://v3.cn.vuejs.org/)
- 编程语言： [TypeScript](https://www.typescriptlang.org/)
- 代码规范：
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Stylelint](https://stylelint.io/)
- 提交规范：
  - [husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [commitlint](https://commitlint.js.org/#/)
- css 预处理器： [scss](https://sass-lang.com/)
- 状态管理工具：[pinia](https://pinia.vuejs.org/)
- pinia 数据持久化插件：[pinia-plugin-persist-uni](https://allen-1998.github.io/pinia-plugin-persist-uni/)
- vite 插件：
  - [pinia-auto-refs](https://github.com/Allen-1998/pinia-auto-refs)
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
  - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
  - [unocss](https://github.com/unocss/unocss)
  - [auto-import-types](https://github.com/Allen-1998/auto-import-types)


## 工程目录

```shell
.
├── .husky
│   ├── _
│   ├── commit-msg commit信息校验钩子
│   ├── pre-commit commit前置钩子
├── .vscode
│   ├── extensions.json vscode工作区插件推荐
│   ├── settings.json vscode工作区设置
├── auto
│   ├── addPage.ts 根据pages.json自动生成页面
├── src
│   ├── @types ts类型定义
│   ├── api 请求中心
│   ├── components 项目组件
│   ├── config 全局配置
│   ├── @helper storeToRefs 增强(pinia-auto-refs自动生成)
│   ├── hooks hooks函数
│   ├── pages 页面目录
│   ├── static 静态资源、css
│   ├── store 状态管理
│   └── utils 工具包
│      ├── platform.ts 获取运行环境
│      ├── request.ts 请求方法封装
│      ├── router.ts 路由跳转封装
│      ├── shared.ts 基础公共方法
│      ├── uniAsync.ts async调用异步方法
│      └── urlMap.ts 获取页面类型
│   ├── App.vue 入口文件
│   ├── auto-imports.d.ts 自动导入vue-composition-api(unplugin-auto-import自动生成)
│   ├── components.d.ts 自动导入组件(unplugin-vue-components自动生成)
│   ├── env.d.ts 全局声明
│   ├── main.ts 主入口
│   ├── manifest.json 应用配置文件
│   ├── pages.json 全局配置文件
│   └── uni.scss uni-app内置的常用样式变量
├── .cz-config.js cz提交信息提示配置
├── .czrc cz规则配置
├── .editorconfig 编辑器配置
├── .eslintignore eslint忽略配置
├── .eslintrc-auto-import-types.json 自动挂载@types下.d.ts文件定义的类型到global(auto-import-types自动生成)
├── .eslintrc-auto-import.json 自动挂载 unplugin-auto-import 的类型到global(unplugin-auto-import自动生成)
├── .eslintrc.js eslint配置
├── .gitignore git忽略配置
├── .lintstagedrc.json lint-staged配置
├── .npmrc npm配置
├── .prettierignore prettier忽略配置
├── .stylelintrc.js stylelint配置
├── commitlint.config.js commitlint配置
├── FAQ.md
├── index.html 项目入口
├── LICENSE MIT说明
├── package-lock.json
├── package.json
├── prettier.config.js prettier配置
├── README.md
├── TODO.md
├── tsconfig.json ts配置
├── unocss.config.ts unocss配置
└── vite.config.ts vite配置

### 参考资料
1. https://github.com/youlaitech/mall-app   （uniapp ）
2. https://github.com/xiangshu233/vue3-vant4-mobile  （vant）
3. https://github.com/newbee-ltd/newbee-mall-vue3-app （ vant）
5. https://github.com/LeoKun1231/my-shop   （uniapp vue3 vite）



# 常见问题

## vetur 提示组件引入报错

**原因：**

vue3 配套的 vscode 插件为 volar,vetur 会存在冲突

**解决方法：**

在扩展中搜索 volar 安装,然后搜索 vetur 设置禁用工作区










