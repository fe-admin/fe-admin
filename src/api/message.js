import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
  getMessageList: "/message/getMessageList",
  getSubscribeList: "/message/getSubscribeList",
};

export function getMessageList(params) {
  console.info(params);
  return ErrorBoundary(get(`${baseURL}${API.getMessageList}`, { params }));
}

export function getSubscribeList(params) {
  console.info(params);
  return ErrorBoundary(get(`${baseURL}${API.getSubscribeList}`, { params }));
}