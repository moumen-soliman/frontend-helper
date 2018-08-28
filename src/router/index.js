import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: { name: 'Home' }
    },
    {
      path: '/frontend-helper',
      name: 'Home',
      component: () => import('@components/Home')
    },
    {
      path: '/frontend-helper/about',
      name: 'About',
      component: () => import('@components/About')
    },
    {
      path: '/frontend-helper/item',
      name: 'Item',
      component: () => import('@components/itemsPages/Item')
    },
    {
      path: '/frontend-helper/Articles',
      name: 'Articles',
      component: () => import('@components/Articles')
    },
    {
      path: '/frontend-helper/Conferences',
      name: 'Conferences',
      component: () => import('@components/Conferences')
    },
    {
      path: '/frontend-helper/Contributors',
      name: 'Contributors',
      component: () => import('@components/Contributors')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@components/NotFound')
    }
  ]
})
