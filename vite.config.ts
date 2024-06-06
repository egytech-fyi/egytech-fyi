import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(new URL('./src/assets', import.meta.url).pathname),
      '@components': path.resolve(new URL('./src/components', import.meta.url).pathname),
      '@constants': path.resolve(new URL('./src/constants', import.meta.url).pathname),
      '@context': path.resolve(new URL('./src/context', import.meta.url).pathname),
      '@functions': path.resolve(new URL('./src/functions', import.meta.url).pathname),
      '@mock': path.resolve(new URL('./src/mock', import.meta.url).pathname),
      '@pages': path.resolve(new URL('./src/pages', import.meta.url).pathname),
      '@services': path.resolve(new URL('./src/services', import.meta.url).pathname),
      '@styles': path.resolve(new URL('./src/styles', import.meta.url).pathname),
      '@types': path.resolve(new URL('./src/types', import.meta.url).pathname),
      '@utils': path.resolve(new URL('./src/utils', import.meta.url).pathname),
    },
  },
  plugins: [react()],
})
