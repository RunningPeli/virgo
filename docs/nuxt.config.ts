import { resolve } from 'node:path'
import { cwd } from 'node:process'

const isDev = process.env.NODE_ENV !== 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image', 
    '@nuxt/scripts',
    isDev ? '../packages/core/src/nuxt.ts' : '@runningpeli/virgo/nuxt'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  ...(isDev ? {
    alias: { '@runningpeli/virgo': resolve(cwd(), '../packages/core/src/index.ts') }
  } : {})
})