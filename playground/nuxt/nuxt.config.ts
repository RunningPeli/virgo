import { resolve } from 'node:path'
import { cwd } from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['../../packages/core/src/nuxt.ts', '@nuxtjs/tailwindcss'],
  alias: { '@runningpeli/virgo': resolve(cwd(), '../../packages/core/src/index.ts') },
})
