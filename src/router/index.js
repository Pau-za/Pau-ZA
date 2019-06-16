import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Tools from '@/views/Tools'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    }
  ]
})
