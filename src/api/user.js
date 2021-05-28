import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
  login: "/user/login",
  loginOut: "/user/logout",
};

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
  return Promise.resolve();
}
