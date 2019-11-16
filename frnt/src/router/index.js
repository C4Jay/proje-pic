import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import NewTik from '@/components/NewTik'
import TikView from '@/components/TikView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/new',
    name: 'NewTik',
    component: NewTik
  },
  {
    path: '/',
    name: 'TikView',
    component: TikView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
