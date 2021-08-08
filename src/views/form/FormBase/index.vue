<template src="./tpl.html"> </template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAdvanced } from "@/api/form";
import { Item } from "@/types/list";
import { sleep } from "@/utils";

@Component({})
export default class FormBase extends Vue {
  loading = false;
  editeRowIndex = -1;
  editeRow = {};
  formData = {
    name: "",
    host: "",
    approve: "",
    admin: "",
    date: "",
    type: "",
  };
  tableHead = [
    { name: "name", label: "成员名称" },
    { name: "id", label: "工号" },
    { name: "department", label: "所属部门" },
  ];

  tableData: Item[] = [];

  mounted(): void {
    this.getAdvanced();
  }
  async getAdvanced(): Promise<unknown> {
    this.loading = true;

    const [err, res] = await getAdvanced();
    if (!err && res) {
      await sleep(1000);
      this.tableData = res.data;
      this.loading = false;
    }
    return;
  }
  edite(index: number): void {
    this.editeRow = { ...this.tableData[index] };
    this.editeRowIndex = index;
  }
  save(index: number): void {
    const row = this.tableData[index];
    for (let key in row) {
      row[key] = row[key] || "-";
    }
    this.editeRow = { ...row };
    this.editeRowIndex = -1;
  }
  cancel(index: number): void {
    this.tableData[index] = this.editeRow;
    this.editeRowIndex = -1;
  }
  delRow(index: number): void {
    if (this.editeRowIndex !== -1 && this.editeRowIndex !== index) {
      this.$message({
        showClose: true,
        message: "请先保存！",
        type: "warning",
      });
      return;
    }
    this.tableData.splice(index, 1);
    this.editeRowIndex = -1;
  }
  addRow(): void {
    const length = this.tableData.length;
    if (this.editeRowIndex !== -1) {
      this.$message({
        showClose: true,
        message: "请先保存！",
        type: "warning",
      });
      return;
    }
    this.tableData.splice(length, 0, {
      name: "",
      id: "",
      department: "",
    });
    this.editeRowIndex = length;
  }
}
</script>
<style lang="scss" src="./style.scss" scoped></style>
