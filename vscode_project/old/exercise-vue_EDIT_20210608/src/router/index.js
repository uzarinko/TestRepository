import Vue from 'vue'
import Router from 'vue-router'

import Practice from '@/pages/practice'
import Top from '@/pages/top'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: {
        template: '<div>homeです。</div>'
      }
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
