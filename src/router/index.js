import { createRouter, createWebHistory } from 'vue-router'

import PageNotFound from '@/pages/NotFound'
import PageBank from '@/pages/Bank'

const routes = [
  {
    path: '/',
    component: PageBank,
    name: 'AppBank'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export default createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(),
  routes
})
