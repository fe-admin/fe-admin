import { BasicLayout, RouteView } from "@/layout";

export default {
  BasicLayout: BasicLayout,
  RouteView: RouteView,
  Dashboard: () => import("@/views/dashboard"),
  403: () => import(/* webpackChunkName: "fail" */ "@/views/exception/403"),
  404: () => import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
  500: () => import(/* webpackChunkName: "fail" */ "@/views/exception/500"),
  ResultSuccess: () => import("@/views/result/Success"),
  ResultFail: () => import("@/views/result/Error"),
  EditorPaper: () => import("@/views/editor/Paper"),
  EditorMonaco: () => import("@/views/editor/Monaco"),
  TableList: () => import("@/views/list/TableList"),
  MessageList: () => import("@/views/message/MessageList"),
  MessageSubscribe: () => import("@/views/message/MessageSubscribe"),
  MessageType: () => import("@/views/message/MessageType"),
  // 权限页面
  PermissionPage: () => import("@/views/permission/Page"),
  PermissionDirective: () => import("@/views/permission/Directive"),
  // 表单页面
  FormAdvanced: () => import("@/views/form/FormAdvanced"),
  FormBase: () => import("@/views/form/FormBase"),
  FormStep: () => import("@/views/form/FormStep"),
};
