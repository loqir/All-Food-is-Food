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
import BuyerSignUp from "../components/BuyerSignUp.vue"
import SellerSignUp from "../components/SellerSignUp.vue"
import PasswordResetSuccess from "../components/PasswordResetSuccess.vue"
import PasswordReset from "../components/PasswordReset.vue"
import BuyerChat from "../components/BuyerChat.vue"
import SellerChat from "../components/SellerChat.vue"


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
    path: '/buyersignup',
    name: "BuyerSignUp",
    component: BuyerSignUp
  },
  {
    path: '/sellersignup',
    name: "SellerSignUp",
    component: SellerSignUp
  },
  {
    path: '/passwordresetsuccess',
    name: "PasswordResetSuccess",
    component: PasswordResetSuccess
  },
  {
    path: '/passwordreset',
    name: "PasswordReset",
    component: PasswordReset
  },
  {
    path: '/SellerChat',
    name: 'SellerChat',
    component: SellerChat
  },
  {
    path: '/BuyerChat',
    name: 'BuyerChat',
    component: SellerChat
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router