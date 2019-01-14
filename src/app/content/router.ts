import Vue from 'vue'
import VueRouter from 'vue-router'
import { Router } from '@exteranto/core'

import Home from './components/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: Router.add([
    {
      path: '/',
      component: Home,
      name: 'home',
    }
  ]).get()
})
