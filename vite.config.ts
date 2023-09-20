import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Udesign from 'udesign-vue/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, './env')

  return {
    base: config.VITE_BASE_URL,
    plugins: [
      VueRouter({
        dts: 'typings/typed-router.d.ts',
      }),
      Layouts(),
      VueMacros({
        plugins: {
          vue: Vue(),
          vueJsx: VueJsx(),
        },
      }),
      Components({
        dts: 'typings/components.d.ts',
        resolvers: [Udesign()],
      }),
      AutoImport({
        dts: 'typings/auto-imports.d.ts',
        imports: ['vue', VueRouterAutoImports, 'pinia', { '@unhead/vue': ['createHead', 'useHead'] }],
        dirs: ['src/store', 'src/utils', 'src/composables/**'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    envDir: './env',
  }
})
