import Vue from 'vue'
import Router from 'vue-router'

import Practice from '@/pages/practice'
import List from '@/pages/list'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/home',
      name: 'home',
      component: {
        template: '<div>ようこそ。ホーム画面です。</div>'
      }
    }
  ]
})
