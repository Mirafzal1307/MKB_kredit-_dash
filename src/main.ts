/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/template/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

import type { PluginOptions } from 'vue-toastification'
import Toast, { POSITION } from 'vue-toastification'

// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

import '@vueup/vue-quill/dist/vue-quill.snow.css'

loadFonts()

const options: PluginOptions = {
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  position: POSITION.BOTTOM_CENTER,
}

// Create vue app
const app = createApp(App)

// Custom components
app.component('VCustomSelect', vSelect)

// app.use(SetupCalendar, {})
app.component('Calendar', Calendar)
app.component('DatePicker', DatePicker)

app.use(Toast, options)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)

// Mount vue app
app.mount('#app')
