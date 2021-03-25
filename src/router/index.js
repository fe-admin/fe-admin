import Vue from "vue";
import Router from "vue-router";
import constantRouter from "@/router/constant-router";

Vue.use(Router);

let RouterInstance = null;
export const instance = () => {
  RouterInstance = new Router({
    mode: "hash",
    routes: constantRouter,
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

export default instance();
