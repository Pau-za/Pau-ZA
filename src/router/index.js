import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Tools from '@/views/Tools'
import Projects from '@/views/Projects'
import AboutMe from '@/views/AboutMe'
import Contact from '@/views/Contact'

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
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
