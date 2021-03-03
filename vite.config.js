import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { injectHtml } from 'vite-plugin-html';
import legacy from '@vitejs/plugin-legacy'
import vitePluginImp from 'vite-plugin-imp'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // HTML 内容插入
    injectHtml({
      injectData: {
        title: '用户管理系统',
        headTitle: '配置的标题',
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'element-plus',
          style: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ],
  alias: [
    { find: '@', replacement: resolve(__dirname, 'src') }
  ],
})
