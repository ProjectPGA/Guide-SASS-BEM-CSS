import App from "./App.vue";
import Vue from "vue";

import "./registerServiceWorker";
import { store } from "./store";
import router from "./router";

import Element from "element-ui";
import i18n from "@/localization/localization";

import "../node_modules/boxicons/css/boxicons.min.css";
import "element-ui/lib/theme-chalk/index.css";
import "../src/styles/element-variables.scss";
import "./styles/main.scss";

Vue.config.productionTip = false;
Vue.use(Element, { size: "small", zIndex: 3000 });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
