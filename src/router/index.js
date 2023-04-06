import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import Profile from '@/views/Profile.vue'
import SellerListingView from '@/views/SellerListingView.vue'
import BuyerListingView from '@/views/BuyerListingView.vue'
import LandingPage from "../components/LandingPage.vue"
import LogIn from "../components/LogIn.vue"
import BuyerRegister from '@/views/BuyerRegister.vue'
import SellerRegister from '@/views/SellerRegister.vue'


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
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/buyerregister',
    name: 'BuyerRegister',
    component: BuyerRegister
  },
  {
    path: '/sellerregister',
    name: 'SellerRegister',
    component: SellerRegister
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router