import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from "@/components/Pagination";
import router from '@/router'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

new Vue({
  router,
  //配置$bus
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  store
}).$mount('#app')
