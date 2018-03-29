// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 加载muse-ui的组件库
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUi)
// 加载下载的字体图标
import '../static/font/fonts/iconfont.css'
import '../static/font/fonts/iconfont.ttf'
import '../static/font/fonts/iconfont.ttf'
import '../static/font/fonts/iconfont.eot'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
