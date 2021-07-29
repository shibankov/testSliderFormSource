// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
Vue.component('VueSlider', VueSlider)

import Drawer from "vue-simple-drawer"

Vue.component('example-component', require('./js/components/Example.vue').default)


// Vue init
const app = new Vue({
  el: '#app',
  data() {
    return {
      show: false
    }
  },
})
