import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: '{{routerMode}}',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('./Home')
    }
  ]
})
