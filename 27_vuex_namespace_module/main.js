import { createApp } from 'vue'
import App from './App.vue'

// import Vuex from 'vuex'
// createApp.use(plugins)
import store from './store/index'

const app = createApp(App)
app.use(store)
// app.globalProperties.store= store
app.mount('#app')
