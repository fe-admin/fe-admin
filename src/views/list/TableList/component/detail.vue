<template>
  <el-dialog
    title="详情"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form ref="form" label-width="120px">
      <el-form-item label="ID：">{{ currentRow.id }} </el-form-item>
      <el-form-item label="规则名称：">{{ currentRow.name }} </el-form-item>
      <el-form-item label="状态：">{{ currentRow.statusStr }} </el-form-item>
      <el-form-item label="上次调用时间："
        >{{ currentRow.updatedAt }}
      </el-form-item>
      <el-form-item label="描述：">{{ currentRow.desc }} </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Item } from "@/types/list";

@Component({
  components: {},
})
export default class Detail extends Vue {
  @Prop(Function) dialogClose!: () => void;
  @Prop(Object) currentRow!: Item;

  dialogVisible = true;

  handleClose(): void {
    this.dialogVisible = false;
    this.dialogClose();
  }
}
</script>
<style lang="scss" scoped>
/deep/.el-dialog__body {
  padding: 0 20px 20px;
}
.el-form-item {
  margin-bottom: 0;
}
</style>
