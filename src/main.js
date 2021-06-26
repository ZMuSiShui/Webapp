import Vue from 'vue'
import App from './App.vue'
import hevueImgPreview from 'hevue-img-preview'
import Metro from 'metro4'
import './plugins/fullpage.js'

import './assets/style/metro.min.css'


Vue.config.productionTip = false
Vue.use(hevueImgPreview)

new Vue({
  render: h => h(App),
  mounted: function () {
      Metro.init();
  }
}).$mount('#app')
