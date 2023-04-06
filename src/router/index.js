import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import Profile from '@/views/Profile.vue'
import SellerListingView from '@/views/SellerListingView.vue'
import BuyerListingView from '@/views/BuyerListingView.vue'
import LandingPage from "../components/LandingPage.vue"


const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: "/",
    name: 'Login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/sellerlistingview',
    name: 'SellerListingView',
    component: SellerListingView
  },
  ,
  {
    path: '/buyerlistingview',
    name: 'BuyerListingView',
    component: BuyerListingView
  },
  {
    path: '/landingpage',
    name: 'LandingPage',
    component: LandingPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router