import Vue from 'vue'
import Router from 'vue-router'

import Practice from '@/pages/practice'
import List from '@/pages/list'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Thread from '@/pages/thread'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
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
      path: '/thread/:item',
      name: 'Thread',
      component: Thread
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
