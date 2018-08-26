// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from 'bootstrap-vue'

// import { sync } from  'vuex-router-sync'

import store from '@/store/store'

// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuetify)
// Vue.use(VueMoment, {
//   moment
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
