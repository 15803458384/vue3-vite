import { createApp } from 'vue'
import App from './App.vue'
import './styles/bg.scss'
import utils from './utils'
import router from './router'
createApp(App).use(router).mount('#app')
