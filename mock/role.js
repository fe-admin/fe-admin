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
    path: "/list/table-list",
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
  {
    name: "Form",
    path: "base-form",
    meta: {
      title: "表单页面",
      icon: "fe-form",
    },
    children: [
      {
        path: "/form/base-form",
        name: "FormBase",
        meta: {
          title: "基础表单",
        },
      },
      {
        path: "/form/advanced-form",
        name: "FormAdvanced",
        meta: {
          title: "高级表单",
        },
      },
    ],
  },
  // 消息
  {
    name: "Message",
    path: "/message/index",
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
    path: "/exception/403",
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
    path: "/result/success",
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
        },
      },
      {
        path: "/result/fail",
        name: "ResultFail",
        meta: {
          title: "失败",
        },
      },
    ],
  },

  // editor
  {
    name: "Editor",
    path: "editor/monaco",
    meta: {
      title: "编辑器",
      icon: "fe-shape",
      permission: ["admin"],
    },
    children: [
      {
        path: "/editor/paper",
        name: "EditorPaper",
        meta: {
          title: "Paper",
        },
      },
      {
        path: "/editor/monaco",
        name: "EditorMonaco",
        meta: {
          title: "Monaco",
        },
      },
    ],
  },
  {
    name: "Permission",
    path: "/permission/directive",
    meta: {
      title: "权限配置",
      icon: "fe-permission",
    },
    children: [
      {
        path: "/permission/directive",
        name: "PermissionDirective",
        meta: {
          title: "指令权限",
        },
      },
      {
        path: "/permission/page",
        name: "PermissionPage",
        meta: {
          title: "页面权限",
          permission: ["admin"],
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
