import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

// Items
import htmlItem from '../components/itemsPages/htmlItem'

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
      path: '/html',
      name: 'htmlItem',
      component: htmlItem
    }
  ]
})
