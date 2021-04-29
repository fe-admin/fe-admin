import NProgress from "nprogress";
import { getToken } from "@/utils/auth";
import { addRoutes } from "@/utils";
import getAsyncRouter, { getCacheRouter } from "@/router/async-router";
import router from "@/router";
import store from "@/store";

const whiteList = ["/user/login", "/user/register"];
const loginRoutePath = "/user/login";
const defaultRoutePath = "/dashbord";

router.beforeEach((to, from, next) => {
  NProgress.start({ showSpinner: false });
  if (getToken()) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath });
    } else {
      console.info(store.getters.routerAdded);
      if (!store.getters.routerAdded) {
        store
          .dispatch("GenerateRoutes")
          .then((res) => {
            addRoutes(router, getAsyncRouter(res));
            next({ path: to.path });
          })
          .catch(() => {
            store.dispatch("Logout").then(() => {
              next({ path: loginRoutePath, query: { redirect: to.fullPath } });
            });
          });
      } else if (router.getRoutes().length <= 4) {
        addRoutes(router, getCacheRouter());
        next({ path: to.path });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } });
    }
  }
});
router.afterEach(() => {
  NProgress.done();
});
