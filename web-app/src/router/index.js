import Vue from 'vue'
import Router from 'vue-router'
import Vehicles from '@/components/Vehicles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vehicles',
      component: Vehicles
    }
  ]
})
