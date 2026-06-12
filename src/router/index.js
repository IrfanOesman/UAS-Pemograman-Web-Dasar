import { createRouter, createWebHashHistory } from 'vue-router' 
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AttractionsView from '../views/AttractionsView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/attractions', name: 'attractions', component: AttractionsView },
  { path: '/gallery', name: 'gallery', component: GalleryView },
  { path: '/contact', name: 'contact', component: ContactView }
]

const router = createRouter({

  history: createWebHashHistory(import.meta.env.BASE_URL), 
  routes
})

export default router