// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/store/app'
import AccountsRoutes from '@/router/accounts'
import BlogRoutes from '@/router/blog'
import ForumRoutes from '@/router/forum'
import AdminRoutes from '@/router/admin'

const routes = [
  {
    path: '/bbgo-demo/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
    ]
  },
  {
    path: '/bbgo-demo/accounts/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      ...AccountsRoutes,
    ]
  },
  {
    path: '/bbgo-demo/blogs/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      ...BlogRoutes,
    ]
  },
  {
    path: '/bbgo-demo/forum/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      ...ForumRoutes,
    ]
  },
  {
    path: '/bbgo-demo/admin/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      ...AdminRoutes
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
