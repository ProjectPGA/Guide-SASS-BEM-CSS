import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "boxicons";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(Element, { size: "small", zIndex: 3000 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
