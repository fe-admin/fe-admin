/**
 * 分页混入
 * @date 2020-08-14
 * @returns {any}
 */
import { Component, Vue } from "vue-property-decorator";
import { paginationType } from "@/types/element";

@Component({
    name: "PageMixin",
})
export class PageMixin extends Vue {
  pagination: paginationType = {
      currentPage: 1,
      pageSize: 10,
      total: 0,
  };
  getPageParams(
      params: Record<string, unknown>,
      page?: undefined | Record<string, unknown>
  ): Record<string, unknown> {
      if (typeof page === "object") {
          Object.assign(params, page);
      } else {
          const { currentPage, pageSize } = this.pagination;
          Object.assign(params, {
              page: currentPage,
              pageSize,
          });
      }
      return params;
  }
}
