import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import Buefy from 'buefy';

import 'buefy/dist/buefy.css';
import '@mdi/font/css/materialdesignicons.css'
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(Buefy)

app.mount('#app')
