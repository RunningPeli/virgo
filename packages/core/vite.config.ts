/// <reference types="vitest" />

import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    Dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  build: {
    lib: {
      formats: ['es'],
      name: '@runningpeli/virgo',
      fileName: (_, name) => `${name}.mjs`,
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        resolver: resolve(__dirname, 'src/resolver.ts'),
        nuxt: resolve(__dirname, 'src/nuxt.ts'),
      },
    },
    rollupOptions: {
      external: ['vue', '@nuxt/kit'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
