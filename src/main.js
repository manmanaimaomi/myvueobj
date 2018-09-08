// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mystyles/reset.css'
import 'mystyles/border.css'
import 'mystyles/iconfont.css'

import fastclick from 'fastclick'

// iconfont
//一像素边框的解决方案

Vue.config.productionTip = false

fastclick.attach(document.body)//移动端300毫秒点击事件延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
