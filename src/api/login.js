import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const tusdaoUrl = `/user/tusdao_control`;
const API = {
  // 用户
  login: `${tusdaoUrl}/login/login`,
  register: `${tusdaoUrl}/login/register`,
  loginOut: `${tusdaoUrl}/login/logout`,
  getBySystemId: `/tbs/system/getBySystemId`,
  getButtons: `${tusdaoUrl}/resource/getUserButtons`,
  // 通知
  // noticeUnread: `/tbs/notice/unread`,
  noticeUnread: `/tbs/message/getMsgNum`,
};

/**
 * @name 获取按钮权限列表
 * @param { number } menuId 菜单Id
 */
export function getButtonList(menuId) {
  return ErrorBoundary(
    get(`${baseURL}${API.getButtons}`, { params: { menuId } })
  );
}

/**
 * 获取系统字典
 * @param {*} params
 */
export function getBySystemId(params) {
  return ErrorBoundary(get(`${baseURL}${API.getBySystemId}`, { params }));
}

/**
 * 请求字典数据
 * @date 2020-07-21
 * @returns {any}
 */
export async function checkDic(systemId = "tusdao-tbs") {
  const dic = localStorage.getItem(systemId);
  if (!dic) {
    const [, res] = await getBySystemId({ systemId });
    if (res) localStorage.setItem(systemId, JSON.stringify(res));
  }
}

/**
 * 登录
 * @param {} params
 */
export function login(params, handler) {
  return ErrorBoundary(post(`${baseURL}${API.login}`, params), handler);
}

/**
 * 登录退出
 * @param {} params
 */
export function loginOut() {
  return ErrorBoundary(post(`${baseURL}${API.loginOut}`));
}

/**
 * 用户注册
 * @date 2020-08-13
 * @param {any} params
 * @param {any} handler
 * @returns {any}
 */
export function register(params, handler) {
  return ErrorBoundary(post(`${baseURL}${API.register}`, params), handler);
}

/**
 * 未读通知
 * @param {*} params
 */
export function noticeUnread() {
  return ErrorBoundary(get(`${baseURL}${API.noticeUnread}`));
}

export function getMenus() {
  return new Promise((resolve) => {
    const list = [
      {
        name: "Dashboard",
        path: "/dashboard",
        meta: {
          title: "仪表盘",
          icon: "fe-dashboard",
        },
      },
      //exception
      {
        name: "RouteView",
        redirect: "/exception/403",
        path: "/exception",
        meta: { title: "异常页面", name: "RouteView", icon: "fe-exception" },
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
        path: "/result",
        name: "RouteView",
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
    ];
    console.info(list);
    resolve(list);
  });
}
