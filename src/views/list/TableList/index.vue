<template src="./tpl.html"> </template>
<script lang="ts">
import { Component, Ref, Mixins } from "vue-property-decorator";
import CollapseButton from "@/components/CollapseButton";
import { getTableList } from "@/api/list";
import { sleep } from "@/utils";
import PageMixin from "@/mixins/page";
import DialogMixin from "@/mixins/dialog";
import {
  paginationType,
  dialogCloseType,
  getPageParamsType,
} from "@/types/element";
import FePage from "@/components/Pagination";
import { ElForm } from "element-ui/types/form";
import { Item } from "@/types/list";

@Component({
  components: {
    CollapseButton,
    FePage,
    Add: () => import("./component/add"),
    Detail: () => import("./component/detail"),
    Edite: () => import("./component/edite"),
  },
})
export default class TableList extends Mixins(PageMixin, DialogMixin) {
  pagination!: paginationType;
  dialogClose!: dialogCloseType;
  getPageParams!: getPageParamsType;
  @Ref("searchForm") readonly searchFormEle!: ElForm;
  loading = false;
  collapsed = false;
  searchForm = {
    name: "",
    desc: "",
    callNo: "",
    status: "",
    updatedAt: "",
  };
  tableHead = [
    { name: "name", label: "规则名称" },
    { name: "desc", label: "描述" },
    { name: "callNo", label: "服务调用次数" },
    { name: "statusStr", label: "状态" },
    { name: "updatedAt", label: "上次调用时间" },
  ];
  tableData: Item[] = [];
  dialogShow = "";
  currentRow = {};
  mounted(): void {
    this.getTableList();
  }

  resetForm(): void {
    this.searchFormEle.resetFields();
  }
  async getTableList(
    page?: undefined | Record<string, unknown>
  ): Promise<unknown> {
    this.loading = true;
    const defaultParams = {};
    const params = this.getPageParams(defaultParams, page);
    const [err, res] = await getTableList(params);
    if (!err && res) {
      console.info(res);
      await sleep(1000);
      this.tableData = res.data;
      this.pagination.total = res.total;
      this.loading = false;
    }
    return;
  }

  edite(row: Item): void {
    console.info(row);
    this.tableData.splice(row.$index, 1, row);
  }

  onCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  async delRow(id: string): Promise<unknown> {
    this.$notify({
      title: "成功",
      message: "删除成功！",
      type: "success",
    });
    await sleep(1000);
    this.getTableList();

    return;
  }
}
</script>
<style lang="scss" src="./style.scss" scoped></style>
