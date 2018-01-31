import Vue from 'vue'
import Gallery from './Gallery.vue'
import store from './store/index.js'

new Vue({
  el: '#app',
  render: h => h(Gallery),
  store
})
