// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import '../static/base.css'

Vue.config.productionTip = false
Vue.use(Element)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (store.getters.token) {
      next()
    } else {
      next({
        path: '/login',
        query:
        {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
