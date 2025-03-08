import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Vue()],
  build: {
    lib: {
      formats: ['es'],
      name: '@runningpeli/virgo',
      fileName: (_, name) => `${name}.mjs`,
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
