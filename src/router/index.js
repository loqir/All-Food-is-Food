import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'
import OldProfile from '@/views/OldProfile.vue'
import SellerListingView from '@/views/SellerListingView.vue'
import BuyerListingView from '@/views/BuyerListingView.vue'
import LandingPage from "../components/LandingPage.vue"
import LogIn from "../components/auth/LogIn.vue"
import BuyerSignUp from "../components/auth/BuyerSignUp.vue"
import GoogleNumber from "../components/auth/GoogleNumber.vue"
import SellerSignUp from "../components/auth/SellerSignUp.vue"
import PasswordResetSuccess from "../components/auth/PasswordResetSuccess.vue"
import PasswordReset from "../components/auth/PasswordReset.vue"
import BuyerChat from "@/views/BuyerChat.vue"
import SellerChat from "@/views/SellerChat.vue"
import Payment from "../components/Payment.vue"
import PaymentSuccess from "../components/PaymentSuccess.vue"
import ProfilePage from "../components/Profile.vue"
import BuyerListings from "../components/BuyerListing.vue"
import SellerListings from "../components/SellerListing.vue"
import Cart from "../components/commons/Cart.vue"

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
    path: '/oldprofile',
    name: 'OldProfile',
    component: OldProfile
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
    path: '/googlenumber',
    name: "GoogleNumber",
    component: GoogleNumber
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
    component: BuyerChat
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/PaymentSuccess',
    name: 'paymentsuccess',
    component: PaymentSuccess
  },
  {
    path: '/profilepage',
    name: 'profilepage',
    component: ProfilePage
  },
  {
    path: '/buyerlistings',
    name: 'buyerlistings',
    component: BuyerListings
  },
  {
    path: '/sellerlistings',
    name: 'sellerlistings',
    component: SellerListings
  },
  {
    path: '/cart',
    name: 'cart',
    compoenet: Cart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router