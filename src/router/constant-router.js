import { UserLayout } from "@/layout";

const router = [
  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/user/Login"),
      },
    ],
  },

  {
    path: "/404",
    name: "404s",
    component: () => import("@/views/exception/404"),
  },
];
export default router;

function getRouterLength(router, length = 0) {
  if (Array.isArray(router)) {
    length += router.length;
    router.forEach((item) => {
      if (Array.isArray(item.children)) {
        length += getRouterLength(item.children);
      }
    });
  }
  return length;
}

export const length = getRouterLength(router);
