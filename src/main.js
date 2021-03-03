import { createApp } from 'vue'
import App from './App.vue'
import './styles/bg.scss'
import utils from './utils'
import router from './router'
import store from './store'
import { components, plugins } from './element'

// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})

app.use(store).use(router).mount('#app')
