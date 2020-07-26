import Vue from 'vue'
import VueRouter from 'vue-router'
import Colors from '../views/Colors.vue'
import ResponsiveTables from '../views/ResponsiveTables.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Colors',
    component: Colors
  },
  {
    path: '/tables',
    name: 'Responsive Tables',
    component: ResponsiveTables
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
