import { defineNuxtConfig } from 'nuxt'
import replaceIndexTemplate from './index.html'
import path from 'path'

const isSsr = process.argv.includes(`--ssr`)

const WEB_DIR = path.resolve('./web/')

export default defineNuxtConfig({
  // 默认 true
  ssr: isSsr,

  alias: {
    '@': WEB_DIR,
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
