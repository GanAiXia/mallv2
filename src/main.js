import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';

import router from '@/router';
Vue.component(TypeNav.name, TypeNav)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
