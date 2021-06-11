import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
    test: `user/test`,
    getMenus: "/role/getMenus",
    getMenus2: "/role/menus2",
};

export function userTest(params, handler) {
    return ErrorBoundary(get(`${baseURL}${API.test}`, { params }), handler);
}
export function getMenus() {
    return ErrorBoundary(get(`${baseURL}${API.getMenus}`));
}
export function getMenus2() {
    return ErrorBoundary(get(`${baseURL}${API.getMenus2}`));
}
