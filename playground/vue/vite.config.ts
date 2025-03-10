import VirgoResolver from '@runningpeli/virgo/resolver'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    components({
      dts: true,
      resolvers: [
        VirgoResolver(),
      ],
    }),
  ],
})
