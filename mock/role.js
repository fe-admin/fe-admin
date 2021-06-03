const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    meta: {
      title: "仪表盘",
      icon: "fe-dashboard",
    },
  },
  // table
  {
    name: "List",
    path: "/list",
    redirect: "/list/table-list",
    meta: {
      title: "列表页面",
      icon: "fe-table",
    },
    children: [
      {
        path: "/list/table-list",
        name: "TableList",
        meta: {
          title: "查询表格",
        },
      },
    ],
  },
  // 消息
  {
    name: "Message",
    redirect: "/message/index",
    path: "/message",
    meta: { title: "消息中心", icon: "fe-message" },
    children: [
      {
        path: "/message/index",
        name: "MessageList",
        meta: {
          title: "站内信",
        },
      },
      {
        path: "/message/subscribe",
        name: "MessageSubscribe",
        meta: {
          title: "消息订阅",
        },
      },
      {
        path: "/message/type",
        name: "MessageType",
        meta: {
          title: "消息类型",
        },
      },
    ],
  },
  // 错误
  {
    name: "Exception",
    redirect: "/exception/403",
    path: "/exception",
    meta: { title: "异常页面", icon: "fe-exception" },
    children: [
      {
        path: "/exception/403",
        name: "403",
        meta: {
          title: "403",
        },
      },
      {
        path: "/exception/404",
        name: "404",
        meta: {
          title: "404",
        },
      },
      {
        path: "/exception/500",
        name: "500",
        meta: {
          title: "500",
        },
      },
    ],
  },
  // result
  {
    name: "Result",
    path: "/result",
    redirect: "/result/success",
    meta: {
      title: "结果页面",
      icon: "fe-result",
    },
    children: [
      {
        path: "/result/success",
        name: "ResultSuccess",
        meta: {
          title: "成功",
          keepAlive: false,
          hiddenHeaderContent: true,
        },
      },
      {
        path: "/result/fail",
        name: "ResultFail",
        meta: {
          title: "失败",
          keepAlive: false,
          hiddenHeaderContent: true,
        },
      },
    ],
  },

  // editor
  {
    name: "Editor",
    path: "/editor",
    redirect: "/editor/paper",
    meta: {
      title: "图形编辑器",
      icon: "fe-shape",
      permission: ["admin"],
    },
    children: [
      {
        path: "/editor/paper",
        name: "EditorPaper",
        meta: {
          title: "paper编辑器",
          keepAlive: false,
        },
      },
    ],
  },
  {
    name: "System",
    path: "/system",
    redirect: "/system/page",
    meta: {
      title: "权限配置",
      icon: "fe-permission",
    },
    children: [
      {
        path: "/permission/page",
        name: "PermissionPage",
        meta: {
          title: "页面权限",
          permission: ["admin"],
        },
      },
      {
        path: "/permission/directive",
        name: "PermissionDirective",
        meta: {
          title: "指令权限",
        },
      },
    ],
  },
];
module.exports = [
  {
    url: "role/getMenus",
    response: {
      code: 200,
      data: routes,
    },
  },
];
