/**
 * 分页混入
 * @date 2020-08-14
 * @returns {any}
 */
import { Component, Vue } from "vue-property-decorator";

@Component({})
export class PageMixin extends Vue {
  currentPage = 1;
  pageSize = 10;
  total = 0;
  pagination = {
    currentPage: 1,
    pageSize: 10,
    total: 0,
  };
  getPageParams() {}
}
