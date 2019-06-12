import Vue from 'vue'
import Router from 'vue-router'
import Main from '../src/views/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    
  ]
})
