import set from "lodash.set";
import { Message } from "element-ui";
import lodashGet from "lodash.get";
import Encapsulation from "axios-encapsulation";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios/index.d";

import { FElMessage } from "@/types/element";
import { getToken } from "./auth";

const transformData = function(res: AxiosResponse) {
  if (res.data.code === 200) {
    return res.data.data !== undefined ? res.data.data : res.data.result;
  }
  return Promise.reject(res.data);
};

const addStampToken = function(config: AxiosRequestConfig) {
  const token = getToken();
  if (token) {
    set(config, "headers.common", { token });
  }
  if (config.method === "get") {
    config.params = {
      ...config.params,
      stamp: Math.random(),
    };
  }
  return config;
};

const encapsulationInstance = new Encapsulation({
  retry: {
    retryDelay: (retryCount: number) => {
      return retryCount * 1000;
    },
    shouldResetTimeout: true,
    retryCondition: (error: AxiosError) => {
      return error.config.method === "get" || error.config.method === "post";
    },
  },
  request: [addStampToken],
  response: [transformData],
});
const { Axios } = encapsulationInstance;
const { get, post } = Axios;

export default Axios;
export const deletes = Axios.delete;
export { get, post };

/**
 * 全局错误处理函数
 * @param {*} promise
 * @param {*} handle
 */

export function ErrorBoundary<T>(promise: Promise<T>, handle?: () => void) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (!handle) {
        setTimeout(() => {
          throw Error(err.message || err);
        }, 16);
      }
      return [err];
    });
}

window.addEventListener("error", (e) => {
  console.info(e);
  e.preventDefault();
  let message = (lodashGet(e, "message") || "").replace(
    /Uncaught Error: /i,
    ""
  );
  if (message === "undefined" || message === "Uncaught Error") {
    message = "";
  }
  const msg: string = message;
  // ResizeObserver loop limit exceeded
  if (/ResizeObserver|Script error|qiankun/.test(msg)) return;
  (Message as FElMessage).closeAll();
  Message({
    type: "error",
    dangerouslyUseHTMLString: true,
    message: msg,
    duration: 5000,
    showClose: true,
  });
});
