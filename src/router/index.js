import Vue from "vue";
import Router from "vue-router";
import store from "../store/index.js";
import nprogress from "nprogress";

Vue.use(Router);

let RouterInstance = null;
import { constantRouterMap, asyncRouterMap } from "@/config/router";

export const instance = () => {
  RouterInstance = new Router({
    mode: "history",
    routes: [...constantRouterMap, ...asyncRouterMap],
  });

  RouterInstance.beforeEach((to, from, next) => {
    nprogress.start();
    const userName = localStorage.getItem("accountName");
    const userId = localStorage.getItem("userId");
    // localStorage.setItem("microId", "tbs");
    // store.commit("update", { layout: to.meta.layout || "" });
    if (userName && !["/user/login"].includes(to.path)) {
      store.commit("updateUserInfo", {
        userName,
        userId,
      });
      next();
    } else if (["/user/login", "/user/register"].includes(to.path)) {
      store.commit("clear");
      next();
    } else {
      next({ path: "/user/login" });
    }
    next();
  });
  RouterInstance.afterEach(() => {
    nprogress.done();
  });
  const originalPush = RouterInstance.push.bind(RouterInstance);
  RouterInstance.push = (location) => {
    return originalPush(location).catch((err) => err);
  };

  const originalReplace = RouterInstance.replace.bind(RouterInstance);
  RouterInstance.replace = (location) => {
    return originalReplace(location).catch((err) => err);
  };
  return RouterInstance;
};
