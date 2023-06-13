import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'


// createApp.use(plugins)

createApp(App).use(plugins).mount('#app')
