import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router/index'

// createApp.use(plugins)

const app = createApp(App)
app.use(VueRouter)
app.mount('#app')
