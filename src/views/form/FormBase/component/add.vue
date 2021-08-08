<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>add</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Ref, Prop, Vue } from "vue-property-decorator";
import { getTableList } from "@/api/org";
import { sleep } from "@/utils";
import { ElForm } from "element-ui/types/form";

@Component({
  components: {},
})
export default class Add extends Vue {
  @Prop(Function) dialogClose!: () => void;

  @Ref("searchForm") readonly searchFormEle!: ElForm;
  loading = false;
  dialogVisible = true;
  searchForm = {
    name: "",
    desc: "",
    callNo: "",
    status: "",
    updatedAt: "",
  };

  mounted(): void {
    // this.getTableList();
  }

  // resetForm(): void {
  //   this.searchFormEle.resetFields();
  // }
  // async getTableList(
  //   page?: undefined | Record<string, unknown>
  // ): Promise<unknown> {
  //   this.loading = true;
  //   const defaultParams = {};
  //   const params = this.getPageParams(defaultParams, page);
  //   const [err, res] = await getTableList(params);
  //   if (!err && res) {
  //     await sleep(1000);
  //     this.tableData = res.data;
  //     this.pagination.total = res.total;
  //     this.loading = false;
  //   }
  //   return;
  // }

  handleClose(): void {
    this.dialogVisible = false;
    this.dialogClose();
  }
}
</script>
<style lang="scss" scoped></style>
