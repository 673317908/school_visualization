import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css"
import SocketService from "./utils/socket_service"
SocketService.Instance.connect()

Vue.config.productionTip = false;

Vue.prototype.$socket = SocketService.Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");