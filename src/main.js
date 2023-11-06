import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import TheTypeNav from '@/components/TheTypeNav'
Vue.component(TheTypeNav.name, TheTypeNav)

import '@/mock/mockServe'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
