import { BasicLayout } from "@/layout";
import routerMap from "./map-router";

function formatMenu(list, router) {
  list.forEach((item) => {
    const route = {
      name: item.name,
      path: item.path,
      component: routerMap[item.name] || routerMap.RouteView,
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
  const rootRouter = {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/dashboard",
    children: [],
    meta: {
      // 面包屑使用
      title: "首页",
    },
  };

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
