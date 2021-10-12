import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faBolt, faMapMarkerAlt, faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

library.add(faMapSigns, faBolt, faMapMarkerAlt, faArrowRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
