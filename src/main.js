import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'


// createApp.use(plugins)

const app = createApp(App)
const bus = mitt()
app.config.globalProperties.$bus = bus
app.mount('#app')
