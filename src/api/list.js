import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
  getTableList: "/list/getTableList",
};

export function getTableList(params) {
  return ErrorBoundary(get(`${baseURL}${API.getTableList}`, { params }));
}
