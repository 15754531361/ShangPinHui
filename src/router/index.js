import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@/pages/AppHome'
import AppLogin from '@/pages/AppLogin'
import AppRegister from '@/pages/AppRegister'
import AppSearch from '@/pages/AppSearch'

export default new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: AppHome,
      meta: {
        show: true,
      },
    },
    {
      name: 'Login',
      path: '/login',
      component: AppLogin,
      meta: {
        show: false,
      },
    },
    {
      name: 'Register',
      path: '/register',
      component: AppRegister,
      meta: {
        show: false,
      },
    },
    {
      name: 'Search',
      path: '/search',
      component: AppSearch,
      meta: {
        show: true,
      },
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
})
