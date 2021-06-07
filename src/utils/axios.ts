/*
 * @Author: jubao.tian
 * @Date: 2020-08-13 16:38:58
 * @Last Modified by: jubao.tian
 * @Last Modified time: 2021-06-04 15:18:12
 */
import set from "lodash.set";
import { Message } from "element-ui";
import lodashGet from "lodash.get";
import encapsulation from "axios-encapsulation";

const dowloadTransform = function(res) {
  if (res && res.config && res.config.download) {
    if (res.data.size < 100) {
      return res.data.text().then((text) => {
        return Promise.reject(JSON.parse(text));
      });
    } else {
      try {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.download = decodeURIComponent(res.config.download);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        return new Promise(() => {});
      } catch (error) {}
    }
    return Promise.reject(res.data);
  } else {
    return Promise.resolve(res);
  }
};
const transformData = function(res) {
  if (res.data.code === 200) {
    return res.data.data !== undefined ? res.data.data : res.data.result;
  } else {
    return Promise.reject(res.data);
  }
};

const addStampToken = function(config) {
  const token = localStorage.getItem("token");
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

const encapsulationInstance = new encapsulation({
  axiosRetryConfig: {
    retryDelay: (retryCount) => {
      return retryCount * 1000;
    },
    shouldResetTimeout: true,
    retryCondition: (error) => {
      return error.config.method === "get" || error.config.method === "post";
    },
  },
  requestChain: [addStampToken],
  responseChain: [dowloadTransform, transformData],
});
const { Instance }: any = encapsulationInstance;
const { get, post, put } = Instance;

export default Instance;
export const deletes = Instance.delete;
export { get, post, put };

/**
 * 全局错误处理函数
 * @param {*} promise
 * @param {*} handle
 */
export function ErrorBoundary<T>(
  promise: Promise<T>,
  handle?: () => void
): Promise<any> {
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
  Message.closeAll();
  Message({
    type: "error",
    dangerouslyUseHTMLString: true,
    message: msg,
    duration: 5000,
    showClose: true,
  });
});
