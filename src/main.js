import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import router from '@/router'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
