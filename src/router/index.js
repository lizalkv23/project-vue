import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import GalleryView from "@/views/GalleryView.vue"
import AboutView from "@/views/AboutView.vue"
import ContactsView from "@/views/ContactsView.vue"
import HelpView from "@/views/HelpView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "GalleryView",
      component: GalleryView,
    },
    {
      path: "/about",
      name: "AboutView",
      component: AboutView,
    },
    {
      path: "/contacts",
      name: "ContactsView",
      component: ContactsView,
    },
    {
      path: "/help",
      name: "HelpView",
      component: HelpView,
    },
  ],
})

export default router
