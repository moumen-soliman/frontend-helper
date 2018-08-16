import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Articles from '../components/Articles'
import NotFound from '../components/NotFound'

// Items
import Item from '../components/itemsPages/Item'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    }
  ]
})
