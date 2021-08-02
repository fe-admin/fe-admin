<template>
  <el-dialog
    title="详情"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form ref="form" label-width="100px">
      <el-form-item label="机构名称：">{{ currentRow.orgName }} </el-form-item>
      <el-form-item label="机构编码：">{{ currentRow.orgCode }} </el-form-item>
      <el-form-item label="机构ID：">{{ currentRow.orgId }} </el-form-item>
      <el-form-item label="节点名称：">{{ currentRow.nodeAddr }} </el-form-item>
      <el-form-item label="状态："
        >{{ enableType[currentRow.nodeStatus] }}
      </el-form-item>
      <el-form-item label="入网时间："
        >{{ currentRow.createTime }}
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Item } from "@/types/list";
import { getDicMap, enableType } from "@/config/dic";

@Component({
  components: {},
})
export default class Detail extends Vue {
  @Prop(Function) dialogClose!: () => void;
  @Prop(Object) currentRow!: Item;

  dialogVisible = true;
  enableType = getDicMap(enableType);

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
