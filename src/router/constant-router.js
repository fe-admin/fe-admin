import { UserLayout } from "@/layout";

export default [
  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Login"),
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Register"),
      },
    ],
  },

  {
    path: "/404",
    name: "404s",
    component: () =>
      import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
  },
];
