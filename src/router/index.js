import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/login')
    },
    {
      path: '/',
      component: () => import('@/components/layout'),
      meta: {
        requireLogin: true
      },
      children: [
        {
          path: '/',
          component: () => import('@/pages/index')
        },
        {
          path: '/usercenter',
          component: () => import('@/pages/usercenter')
        }
      ]
    }
  ]
})
