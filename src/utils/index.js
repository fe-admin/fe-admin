/*
 * @Author: jubao.tian
 * @Date: 2020-07-15 10:55:28
 * @Last Modified by: jubao.tian
 * @Last Modified time: 2021-05-12 15:58:41
 */
import debounces from "lodash.debounce";

export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function setFullBackground(selector) {
  const ele = document.querySelector(selector);
  if (ele) {
    const height = Math.max(670, window.innerHeight - 78);
    ele.style.height = `${height}px`;
  }
}

export function debounce(fn, time = 1000, options = { leading: true }) {
  return debounces(fn, time, options);
}

export const toUpperCase = ([a, ...b]) => a.toUpperCase() + `${b}`;
export const isQiankun = () => !!window.__POWERED_BY_QIANKUN__;

/**
 * 获取服务ID
 * @date 2020-09-02
 * @returns {any}
 */
export const microId = () =>
  isQiankun() ? "portal" : localStorage.getItem("microId");

/**
 * 获取字典信息
 * @date 2020-07-21
 * @param {any} key
 * @param {any} dictionary
 * @returns {any}
 */
export function getDicByKey(key, dictionary = "tusdao-tbs") {
  try {
    let dic = localStorage.getItem(dictionary);
    dic = JSON.parse(dic);
    return dic[key];
  } catch (error) {}
  return {};
}

/**
 * dic 转换为list
 * @export Array
 * @param {*} data
 */
export function dicToList(data, append) {
  const list = [];
  if (append) list.push(append);
  data &&
    Object.keys(data)
      .sort((a, b) => a - b)
      .forEach((item) => {
        list.push({
          code: isNaN(item * 1) ? item : item * 1,
          name: data[item],
        });
      });
  return list;
}

export function getMenuItem(item) {
  const { menuName, iconName, menuUrl, menuId, menuDesc } = item.configMenuInfo;
  return {
    title: menuName,
    icon: iconName,
    url: menuUrl,
    menuId: menuId,
    uuid: menuDesc,
  };
}

export function getMenuData(res) {
  const list = [];
  const formatMenu = (arr, parent) => {
    arr.forEach((item, index) => {
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(getMenuItem(item));
      } else {
        list.push(getMenuItem(item));
      }
      if (item.children) {
        formatMenu(item.children, list[index]);
      }
    });
  };
  formatMenu(res);
  return list;
}

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
  console.info(existRouter);

  if (Array.isArray(list) && router && router.addRoutes) {
    list.forEach((item) => {
      const exist = existRouter.filter((row) => row.name === item.name).length;
      !exist && router.addRoute(item);
    });
  }
}
