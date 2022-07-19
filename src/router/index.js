import { createRouter, createWebHistory } from 'vue-router'

import sourceData from '@/assets/JSON/sourceData.json'

import PageInsuranceProducts from '@/pages/InsuranceProducts'
import PageNotFound from '@/pages/NotFound'
import PageBank from '@/pages/Bank'

const routes = [
  {
    path: '/',
    component: PageBank,
    name: 'HomeAppBank'
  },
  {
    path: '/insurance-products/:id',
    component: PageInsuranceProducts,
    name: 'InsuranceProducts',
    props: true,
    beforeEnter(to, from, next) {
      //  проверить на существование
      const page = sourceData.pages.find(page => page.id === to.params.id)
      if (page?.file) {
        next()
      } else {
        next({
          name: 'NotFound',
          component: PageNotFound,
          params: { pathMatch: to.path.substring(1).split('/') },
          hash: to.hash,
          query: to.query
        })
      }
    }
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
