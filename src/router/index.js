import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'escape',
      component:()=>import('../views/EscapelogoView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/categories',
      name:'categories',
      component:()=> import('../views/CategoriesView.vue')
    },
    {
      path:'/contact',
      name:'contact',
      component:()=>import('../views/ContactView.vue')
    }
  ]
})

export default router
