import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/favorite/:id/edit',
    name: 'favorite-edit',
    component: () => import('../views/FavoriteEdit.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes
})

export default router
