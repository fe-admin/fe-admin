export const tbsMenus = [
  {
    name: "dashboard",
    title: "仪表盘",
    icon: "fe-dashboard",
    url: "/dashboard",
  },
  {
    name: "exception",
    title: "异常页面",
    icon: "fe-exception",
    children: [
      {
        name: "Exception403",
        title: "403",
        url: "/exception/403",
      },
      {
        name: "Exception404",
        title: "404",
        url: "/exception/404",
      },
      {
        name: "Exception500",
        title: "500",
        url: "/exception/500",
      },
    ],
  },
];

export const baseURL = window.baseURL || process.env.VUE_APP_BASEURL;
export const { echarts } = window;
window.baseURL = baseURL || process.env.VUE_APP_BASEURL;
