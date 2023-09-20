import { createApp } from 'vue'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from '@/router'
import '@/assets/style/global.scss'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const head = createHead()

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')
