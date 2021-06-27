import Vue from 'vue'
import App from './App.vue'
import Metro from 'metro4'
import './plugins/fullpage.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: function () {
      Metro.init();
  }
}).$mount('#app')
