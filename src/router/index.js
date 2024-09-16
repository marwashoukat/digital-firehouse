import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () => import('../views/HomePage.vue')
    },
  ],
  linkActiveClass: 'bg-gray-900 text-white'
})

export default router
