import Vue from "vue";
import EventProxy from "vue-event-proxy";
import ElementUI, { Message, Loading } from "element-ui";
import ProLayout from "./layout/components/BasicLayout";
import SvgIcon from "./components/SvgIcon";

import "./assets/iconfont/iconfont";
import "./assets/iconfont/iconfont.css";
import { CreateElement } from "vue/types/index.d";
import App from "./App.vue";
import * as router from "./router";
import store from "./store";
import "@/styles/public/index.scss";

Vue.use(EventProxy);
Vue.use(SvgIcon);
Vue.use(ElementUI);
Vue.component("pro-layout", ProLayout);
Vue.config.productionTip = false;
Vue.config.errorHandler = function(err) {
  Message.closeAll();
  Message({
    type: "error",
    dangerouslyUseHTMLString: true,
    message: err.msg,
    duration: 5000,
    showClose: true,
  });
};

Vue.config.warnHandler = function(msg) {
  console.warn(`${msg}`);
};
Vue.prototype.$loading = Loading;

new Vue({
  router: router.instance(),
  store,
  render: (h: CreateElement) => h(App),
}).$mount("#app");
