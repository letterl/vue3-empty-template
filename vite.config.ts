import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      views: resolve('src/views'),
      store: resolve('src/store'),
      http: resolve('src/api/index.ts'),
      interface: resolve('src/interface')
    }
  },
  server: {
    open: true,
    proxy: {}
  }
})
