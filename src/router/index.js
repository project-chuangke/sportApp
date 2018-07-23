import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/pages/test'
import Home from '@/pages/index'
import Video from '@/pages/video/index'
import Recommend from '@/pages/video/recommend'
import Channel from '@/pages/video/channel'

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
          children: [
            { path: 'recommend', name: 'Recommend', component: Recommend},
            { path: 'channel', name: 'Channel', component: Channel},
          ]
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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }
  ]
})
