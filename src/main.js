import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false

import store from '@/store/store'
import router from '@/router/index'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

