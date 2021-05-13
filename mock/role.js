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
      icon: "fe-result",
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
          permission: ["exception"],
        },
      },
      {
        path: "/exception/404",
        name: "404",
        meta: {
          title: "404",
          permission: ["exception"],
        },
      },
      {
        path: "/exception/500",
        name: "500",
        meta: {
          title: "500",
          permission: ["exception"],
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
      permission: ["result"],
    },
    children: [
      {
        path: "/result/success",
        name: "ResultSuccess",
        meta: {
          title: "成功",
          keepAlive: false,
          hiddenHeaderContent: true,
          permission: ["result"],
        },
      },
      {
        path: "/result/fail",
        name: "ResultFail",
        meta: {
          title: "失败",
          keepAlive: false,
          hiddenHeaderContent: true,
          permission: ["result"],
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
      permission: ["result"],
    },
    children: [
      {
        path: "/editor/paper",
        name: "EditorPaper",
        meta: {
          title: "paper编辑器",
          keepAlive: false,
          permission: ["result"],
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
