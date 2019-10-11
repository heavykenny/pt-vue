import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import BootstrapVue from "bootstrap-vue";
import "./css/custom.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.prototype.$http = Axios;
Axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = "Bearer " + token;

  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
