/*
 * @Author: jubao.tian
 * @Date: 2020-07-15 10:55:28
 * @Last Modified by: jubao.tian
 * @Last Modified time: 2021-06-07 16:01:46
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

export function random(length = -6) {
  return Math.random()
    .toString(36)
    .slice(length);
}

export function addRoutes(router, list) {
  if (Array.isArray(list) && router) {
    list.forEach((item) => {
      router.addRoute(item);
    });
  }
}

export function getDicMap(list) {
  const map = {};
  list.forEach((item) => {
    map[item.value] = item.label;
  });
  return map;
}

export function scrollIntoView(ele) {
  console.info(ele);
  const target = ele || document.querySelector(".is-error");
  target?.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
}
