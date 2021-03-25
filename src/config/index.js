export const baseURL = window.baseURL || process.env.VUE_APP_BASEURL;
export const { echarts } = window;
window.baseURL = baseURL || process.env.VUE_APP_BASEURL;

export default {
  title: "Fe Admin",
};
