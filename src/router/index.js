import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import AboutView from '@/views/AboutView.vue'
import ChatComponent from '@/views/ChatComponent.vue'
import DataView from '@/views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'GalleryView',
      component: GalleryView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/chat',
      name: 'ChatComponent',
      component: ChatComponent
    },
    {
      path: '/data',
      name: 'DataView',
      component: DataView
    }
  ]
})

export default router
