import Vue from 'vue'
import App from './App.vue'

import UmamusumeUI from 'umamusume-ui'
import 'umamusume-ui/lib/umamusume-ui.css'
Vue.use(UmamusumeUI)

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// Vue.use(VueMaterial)

import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
  vuetify,
  render: h => h(App)
})

app.$mount('#app')

