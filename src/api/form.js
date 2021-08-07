import { ErrorBoundary, get, post } from "@/utils/axios";
import { baseURL } from "@/config";

const API = {
    advanced: "/form/advanced",
};

export function getAdvanced(params) {
  return ErrorBoundary(get(`${baseURL}${API.advanced}`, { params }));
}
