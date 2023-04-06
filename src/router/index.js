import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },

  ]
})

export default router
