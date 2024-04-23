import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import '@/assets/css/main.css'
import '@/assets/css/menuBar.css'
import '@/assets/css/variables.css'

import { createI18n } from 'vue-i18n'
import { messages } from './I18n/Translaters'

const i18n = createI18n({
  legacy: false,
  locale: 'cz',
  fallbackLocale: 'en',
  messages,
})

createApp(App).use(router).use(PrimeVue).use(i18n).provide('i18n', i18n).mount('#app')
