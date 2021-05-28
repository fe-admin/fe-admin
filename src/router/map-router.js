import { BasicLayout, RouteView } from "@/layout";

export default {
  BasicLayout: BasicLayout,
  RouteView: RouteView,
  Dashboard: () => import("@/views/dashboard"),
  403: () => import(/* webpackChunkName: "fail" */ "@/views/exception/403"),
  404: () => import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
  500: () => import(/* webpackChunkName: "fail" */ "@/views/exception/500"),
  ResultSuccess: () =>
    import(/* webpackChunkName: "ResultSuccess" */ "@/views/result/Success"),
  ResultFail: () =>
    import(/* webpackChunkName: "ResultFail" */ "@/views/result/Error"),
  EditorPaper: () =>
    import(/* webpackChunkName: "editor" */ "@/views/editor/Paper"),
  TableList: () =>
    import(/* webpackChunkName: "TableList" */ "@/views/list/TableList"),
  MessageList: () =>
    import(/* webpackChunkName: "MessageList" */ "@/views/message/MessageList"),
  MessageSubscribe: () =>
    import(
      /* webpackChunkName: "MessageSubscribe" */ "@/views/message/MessageSubscribe"
    ),
  MessageType: () =>
    import(/* webpackChunkName: "MessageType" */ "@/views/message/MessageType"),
  SystemPage: () => import("@/views/system/SystemPage"),
  SystemDirective: () => import("@/views/system/SystemDirective"),
};
