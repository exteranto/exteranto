import Vue from 'vue'
import { Router } from '@exteranto/core'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: Router.add([
    {
      path: '/',
      component: Home
    }
  ]).get()
})
