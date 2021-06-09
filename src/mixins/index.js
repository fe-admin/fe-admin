/**
 * 分页混入
 * @date 2020-08-14
 * @returns {any}
 */
export const pageMixin = {
  data() {
    return {
      pageSizes: [10, 20, 50, 100],
      pageSize: 10, // 每页显示条目个数
      total: 1, // 总条目数
      currentPage: 1,
    };
  },
};
