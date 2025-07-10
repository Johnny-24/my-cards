import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./../pages/index.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('./../pages/detail.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('./../pages/create.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('./../pages/edit.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
