import { BasicLayout } from "@/layout";
import storage from "store";
import routerMap from "./map-router";

const rootRouter = {
  path: "/",
  name: "index",
  component: BasicLayout,
  redirect: "/dashboard",
  children: [],
  meta: { title: "首页" },
};

function formatMenu(list, router) {
  list.forEach((item) => {
    const route = {
      name: item.name,
      path: item.path,
      component: routerMap[item.name],
      redirect: item.redirect || "",
      meta: {
        title: item.meta.title,
      },
      children: [],
    };
    if (item.children && item.children.length) {
      formatMenu(item.children, route);
    }
    router.children.push(route);
  });
}

export default function getAsyncRouter(menus) {
  if (Array.isArray(menus)) {
    formatMenu(menus, rootRouter);
  }
  return [
    rootRouter,
    {
      path: "*",
      redirect: "/404",
      hidden: true,
    },
  ];
}

export function getCacheRouter() {
  return getAsyncRouter(storage.get("menus"));
}
