import Vue from 'vue'
import VueRouter from 'vue-router'
import Favorite from '../views/Favorite.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
