import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import mockServer from 'vite-plugin-mock-server'

export default defineConfig({
  plugins: [
    vue(),
    {
      ...mockServer({logLevel: 'info'}),
      apply: 'serve',
    },
  ],
})
