import BasicLayout from "../layout/BasicLayout";
import UserLayout from "../layout/UserLayout";
const RouteView = {
  name: "RouteView",
  render: (h) => h("router-view"),
};

export const constantRouterMap = [
  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user"),
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/register"),
      },
    ],
  },

  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
  },
];

export const asyncRouterMap = [
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard"),
        meta: {
          title: "menu.exception.not-permission",
          permission: ["exception"],
        },
      },
      // Exception
      {
        path: "/exception",
        name: "exception",
        component: RouteView,
        redirect: "/exception/403",
        children: [
          {
            path: "/exception/403",
            name: "Exception403",
            component: () =>
              import(/* webpackChunkName: "fail" */ "@/views/exception/403"),
            meta: {
              title: "menu.exception.not-permission",
              permission: ["exception"],
            },
          },
          {
            path: "/exception/404",
            name: "Exception404",
            component: () =>
              import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
            meta: {
              title: "menu.exception.not-find",
              permission: ["exception"],
            },
          },
          {
            path: "/exception/500",
            name: "Exception500",
            component: () =>
              import(/* webpackChunkName: "fail" */ "@/views/exception/500"),
            meta: {
              title: "menu.exception.server-error",
              permission: ["exception"],
            },
          },
        ],
      },
    ],
  },

  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];
