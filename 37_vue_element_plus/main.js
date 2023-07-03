import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import VueRouter from './router/index'

// createApp.use(plugins)

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
