import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
import router from '@/router'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
Vue.component(TypeNav.name, TypeNav)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
