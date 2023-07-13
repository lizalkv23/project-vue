import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      meta: {
        title: "Gallery"
      },
      component: () => import('@/components/layout/MainApp.vue')
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
      path: '/admin ',
      name: 'home',
      redirect: {
        name: 'admin.list'
      },
      component: () => import("@/views/admin/HomeView.vue"),
      children: [
        {
          path: '/admin/list',
          name: 'admin.list',
          meta: { title: 'Events in the app', permission: 'list.read' },
          component: () => import('@/views/admin/roles/List.vue')
        },
        {
          path: '/admin/show',
          name: 'admin.show',
          meta: { title: 'Events in the app', permission: 'show.read' },
          component: () => import('@/views/admin/roles/Show.vue'),
        },
        {
          path: '/admin/update',
          name: 'admin.update',
          meta: { title: 'Events in the app', permission: 'update.read' },
          component: () => import('@/views/admin/roles/Update.vue'),
        },
        {
          path: '/admin/form',
          name: 'admin.form',
          meta: { title: 'Events in the app', permission: 'form.read' },
          component: () => import('@/views/admin/roles/Form.vue'),
        },
        {
          path: '/admin/create',
          name: 'admin.create',
          meta: { title: 'Events in the app', permission: 'create.read' },
          component: () => import('@/views/admin/roles/Create.vue'),
        },
      ]
    }
  ]
})

export default router
