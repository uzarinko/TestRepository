// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vuetify from '@/plugins/vuetify'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

import Paginate from 'vuejs-paginate'

Vue.use(vuetify)
Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.component('paginate', Paginate)

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')
