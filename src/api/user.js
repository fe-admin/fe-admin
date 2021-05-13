import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
  login: "/user/login",
  register: "/user/register",
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
