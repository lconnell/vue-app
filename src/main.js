import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
