import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mato from '@/components/Mato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/Mato',
      name: 'Mato',
      component: Mato
    }
  ]
})
