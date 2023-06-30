import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Rating from 'primevue/rating'
import '/node_modules/primeflex/primeflex.css'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Tag from 'primevue/tag'
import Dropdown from 'primevue/dropdown'
const app = createApp(App)

app.use(PrimeVue)
app.component('Button', Button)
app.component('Sidebar', Sidebar)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('Rating', Rating)
app.component('Tag', Tag)
app.component('Dropdown', Dropdown)
app.use(router)
app.mount('#app')
