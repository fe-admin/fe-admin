import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
  test: `user/test`,
};

export function userTest(params, handler) {
  return ErrorBoundary(get(`${baseURL}${API.test}`, { params }), handler);
}
