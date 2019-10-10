import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import BootstrapVue from "bootstrap-vue";
import "./css/custom.scss"

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
