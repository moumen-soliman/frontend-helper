import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import Articles from '../components/Articles'
import Conferences from '../components/Conferences'
import Contributors from '../components/Contributors'
import NotFound from '../components/NotFound'

// Items
import Item from '../components/itemsPages/Item'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/frontend-helper',
      name: 'Home',
      component: Home
    },
    {
      path: '/frontend-helper/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/frontend-helper/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/frontend-helper/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/frontend-helper/Conferences',
      name: 'Conferences',
      component: Conferences
    },
    {
      path: '/frontend-helper/Contributors',
      name: 'Contributors',
      component: Contributors
    }
  ]
})
