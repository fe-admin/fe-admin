import Vue from "vue";
import EventProxy from "vue-event-proxy";
import ElementUI, { Message, Loading } from "element-ui";
import FeAdmin from "fe-admin-component";
import "@/utils/log";
import "./permission";

import "./assets/iconfont/iconfont";
import "./assets/iconfont/iconfont.css";
import { CreateElement } from "vue/types/index.d";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// if (process.env.NODE_ENV === "development") {
require("../mock");
// }
// import i18n from "./locales";

import "@/styles/public/index.scss";

Vue.use(EventProxy);
Vue.use(ElementUI);
Vue.use(FeAdmin);
console.info(FeAdmin);
Vue.config.productionTip = false;
// Vue.config.errorHandler = function(err) {
// Message.closeAll();
// Message({
//   type: "error",
//   dangerouslyUseHTMLString: true,
//   message: err.msg,
//   duration: 5000,
//   showClose: true,
// });
// };

// Vue.config.warnHandler = function(msg) {
//   console.warn(`${msg}`);
// };
Vue.prototype.$loading = Loading;

new Vue({
  // i18n,
  router: router,
  store,
  render: (h: CreateElement) => h(App),
}).$mount("#app");
