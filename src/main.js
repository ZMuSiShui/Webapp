import Vue from 'vue'
import App from './App.vue'
import './plugins/fullpage.js'
import Metro from 'metro4'
import 'metro4/build/css/metro-all.min.css'
import 'metro4/build/js/metro.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: function () {
    Metro.init();
  }
}).$mount('#app')
