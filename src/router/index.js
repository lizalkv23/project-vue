import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: "Home"
      },
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      meta: {
        title: "Gallery"
      },
      component: () => import('@/views/GalleryView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "About"
      },
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        title: "Chat"
      },
      component: () => import('@/views/ChatComponent.vue')
    },
    {
      path: '/data',
      name: 'DataView',
      meta: {
        title: "List"
      },
      component: () => import('@/views/DataView.vue')
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        title: "List"
      },
      component: () => import('@/components/users/List.vue')
    },
    {
      path: '/show',
      name: 'show',
      meta: {
        title: "Show"
      },
      component: () => import('@/components/users/Show.vue')
    },
    {
      path: '/create',
      name: 'create',
      meta: {
        title: "Create"
      },
      component: () => import('@/components/users/Create.vue')
    },
    {
      path: '/form',
      name: 'form',
      meta: {
        title: "Form"
      },
      component: () => import('@/components/users/Form.vue')
    },
    {
      path: '/update',
      name: 'update',
      meta: {
        title: "Update"
      },
      component: () => import('@/components/users/Update.vue')
    },
  ]
})

export default router
