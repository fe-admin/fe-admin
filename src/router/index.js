import Vue from "vue";
import Router from "vue-router";
import constantRouter, { length } from "@/router/constant-router";

Vue.use(Router);

export const createRouter = (routes) => {
  const instance = new Router({
    mode: "hash",
    scrollBehavior: () => ({ y: 0, behavior: "smooth" }),
    routes,
  });

  const originalPush = instance.push.bind(instance);
  instance.push = (location) => {
    return originalPush(location).catch((err) => err);
  };

  const originalReplace = instance.replace.bind(instance);
  instance.replace = (location) => {
    return originalReplace(location).catch((err) => err);
  };
  return instance;
};

const routeInstance = createRouter(constantRouter);

export default routeInstance;

export const constantLength = length;

// https://github.com/vuejs/vue-router/issues/1234
export function resetRouter() {
  const newRouter = createRouter(constantRouter);
  routeInstance.matcher = newRouter.matcher; // the relevant part
}
