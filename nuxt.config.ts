import { defineNuxtConfig } from 'nuxt'
import replaceIndexTemplate from './index.html'
import path from 'path'

/* vite plugins */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

const IS_SSR = process.argv.includes(`--ssr`)
const WEB_DIR = path.resolve('./web/')

/**
 * https://github.com/arco-design/arco-design-vue/issues/24#issuecomment-1006931025
 * */
export default defineNuxtConfig({
  // 默认 true
  ssr: IS_SSR,

  router: {},

  alias: {
    '@': WEB_DIR,
  },

  build: {
    transpile: ['compute-scroll-into-view'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/styles/variables.less";`,
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      Components({
        dts: true, // enabled by default if `typescript` is installed
        resolvers: [
          ArcoResolver({
            importStyle: 'less',
          }),
        ],
      }),
    ],
    optimizeDeps: {
      include: ['vue', 'lodash', '@arco-design/web-vue', '@arco-design/web-vue/es/icon', 'pinia', 'vue-router'],
      exclude: [],
    },
  },

  // 需要 SSG 的页面，开启 ssr 之后有效
  // 如果不开启 ssr，默认会渲染 200 404 这两个页面 - 看了源码，应该关不掉了，默认会 concat ['/',200,404]
  // https://nitro.unjs.io/config/#prerenderer
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  hooks: {
    'app:templatesGenerated': () => {
      replaceIndexTemplate()
    },
  },

  // TODO 把 composables 也迁移过来
  dir: {
    // static
    public: path.resolve('./public'),

    // web
    middleware: path.resolve(WEB_DIR, './common/middlewares'),
    layouts: path.resolve(WEB_DIR, './layouts'),
    pages: path.resolve(WEB_DIR, './pages'),
  },
  components: {
    dirs: [
      // 不再使用自动引入。。。
      // path.resolve('./web/components')
    ],
  },

  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode'],

  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },

  colorMode: {
    classSuffix: '',
  },
})
