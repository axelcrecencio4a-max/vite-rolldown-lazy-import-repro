import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const SRC_DIR = path.resolve(__dirname, 'src')
const APP_DIR = path.resolve(SRC_DIR, 'app')
const PAGES_DIR = path.resolve(SRC_DIR, 'pages')
const WIDGETS_DIR = path.resolve(SRC_DIR, 'widgets')
const FEATURES_DIR = path.resolve(SRC_DIR, 'features')
const ENTITIES_DIR = path.resolve(SRC_DIR, 'entities')
const SHARED_DIR = path.resolve(SRC_DIR, 'shared')

export default defineConfig({
  plugins: [react()],

  experimental: {
    bundledDev: true,
  },

  resolve: {
    alias: {
      '@app': APP_DIR,
      '@pages': PAGES_DIR,
      '@widgets': WIDGETS_DIR,
      '@features': FEATURES_DIR,
      '@entities': ENTITIES_DIR,
      '@shared': SHARED_DIR,
    },
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },

  server: {
    port: 3001,
    open: true,
  },

  build: {
    outDir: 'build',
    sourcemap: false,
    target: ['es2017'],

    rolldownOptions: {
      experimental: {
        lazyBarrel: true,
      },
    },
  },

  preview: {
    port: 3001,
    open: true,
  },
})
