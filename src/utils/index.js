/*
 * @Author: jubao.tian
 * @Date: 2020-07-15 10:55:28
 * @Last Modified by: jubao.tian
 * @Last Modified time: 2021-06-02 17:47:46
 */
import debounces from "lodash.debounce";

export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function debounce(fn, time = 1000, options = { leading: true }) {
  return debounces(fn, time, options);
}

export const toUpperCase = ([a, ...b]) => a.toUpperCase() + `${b}`;

/**
 * @name 判断按钮是否显示
 * @param { Object [] } buttonList 按钮列表
 * @param { number } buttonSign 按钮唯一标识符
 */
export function showButton(buttonList, buttonSign) {
  const index = buttonList.findIndex((btn) => btn.buttonUrl === buttonSign);
  if (index > -1) {
    return true;
  } else {
    return false;
  }
}

export function random(length = -6) {
  return Math.random()
    .toString(36)
    .slice(length);
}

export function addRoutes(router, list) {
  const existRouter = router.getRoutes();
  if (Array.isArray(list) && router) {
    list.forEach((item) => {
      const exist = existRouter.filter((row) => row.name === item.name).length;
      !exist && router.addRoute(item);
    });
  }
}
