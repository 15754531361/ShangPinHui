import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import TypeNav from '@/pages/AppHome/TypeNav'
Vue.component(TypeNav.name, TypeNav)

import { reqCategoryList } from '@/api'
reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
