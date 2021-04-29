import { BasicLayout, RouteView } from "@/layout";

export default {
  BasicLayout: BasicLayout,
  RouteView: RouteView,
  Dashboard: () => import("@/views/dashboard"),
  403: () => import(/* webpackChunkName: "fail" */ "@/views/exception/403"),
  404: () => import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
  500: () => import(/* webpackChunkName: "fail" */ "@/views/exception/500"),
  ResultSuccess: () =>
    import(/* webpackChunkName: "result" */ "@/views/result/Success"),
  ResultFail: () =>
    import(/* webpackChunkName: "result" */ "@/views/result/Error"),
  EditorPaper: () =>
    import(/* webpackChunkName: "editor" */ "@/views/editor/paper"),
};
