import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppHome from '@/pages/AppHome'
import AppLogin from '@/pages/AppLogin'
import AppRegister from '@/pages/AppRegister'
import AppSearch from '@/pages/AppSearch'

let originPush=VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
  if(resolve && reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace=function(location,resolve,reject){
  if(resolve && reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

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
