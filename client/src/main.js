import { createApp } from 'vue'
import router from './router'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import Aura from '@primeuix/themes/aura';
const app = createApp(App)

import 'primeicons/primeicons.css'

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark'
    }
  }
})
app.use(router)
app.mount('#app')

