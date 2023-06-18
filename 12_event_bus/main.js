import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'


// createApp.use(plugins)
// App.prototype.x = {a:1,b:2}
const app = createApp(App)
const bus = mitt()

app.config.globalProperties.$bus = bus
app.mount('#app')

