import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import '@/assets/css/main.scss'
import '@/assets/css/menuBar.scss'
import '@/assets/css/variables.scss'

import { createI18n } from 'vue-i18n'
import { messages } from './I18n/Translaters'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Регистрация Service Worker
    console.log('UUUUUUUUUUUUUUUUUUUUUUUU')
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        // Проверка наличия обновлений
        registration.onupdatefound = () => {
          const installingWorker = registration.installing
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Перезагрузка страницы, если новый Service Worker установлен
                window.location.reload()
              }
            }
          }
        }
      })
      .catch((error) => {
        console.error('Ошибка регистрации Service Worker:', error)
      })
  })
}

const i18n = createI18n({
  legacy: false,
  locale: 'cz',
  fallbackLocale: 'en',
  messages,
})

createApp(App).use(router).use(PrimeVue).use(i18n).provide('i18n', i18n).mount('#app')
