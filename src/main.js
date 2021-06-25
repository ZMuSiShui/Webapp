import Vue from 'vue'
import App from './App.vue'
import MetroTile from 'vue-metro-tile';
import hevueImgPreview from 'hevue-img-preview'
import './plugins/fullpage.js'


Vue.config.productionTip = false
Vue.use(MetroTile)
Vue.use(hevueImgPreview)

new Vue({
  render: h => h(App),
}).$mount('#app')
