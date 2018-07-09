import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import Video from '@/pages/video/index'
import Contact from '@/pages/contact/index'
import Discover from '@/pages/discover/index'
import Mine from '@/pages/mine/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Video',
          component: Video,
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: 'discover',
          name: 'Discover',
          component: Discover,
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine,
        }
      ]
    }
  ]
})
