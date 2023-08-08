import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Rating from 'primevue/rating'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Tag from 'primevue/tag'
import Dropdown from 'primevue/dropdown'
import Chart from 'primevue/chart'
import Card from 'primevue/card'
import Calendar from 'primevue/calendar'
import SplitButton from 'primevue/splitbutton'
import TabMenu from 'primevue/tabmenu'
import Carousel from 'primevue/carousel'
import Textarea from 'primevue/textarea'
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
app.component('Chart', Chart)
app.component('Card', Card)
app.component('Calendar', Calendar)
app.component('SplitButton', SplitButton)
app.component('TabMenu', TabMenu)
app.component('Carousel', Carousel)
app.component('Textarea', Textarea)


app.use(router)
app.mount('#app')
