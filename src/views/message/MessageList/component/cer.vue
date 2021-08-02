<template>
  <el-dialog
    title="公私钥"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="机构公钥：">
        <el-input v-model="form.name" type="textarea" :rows="3"></el-input>
      </el-form-item>
          <el-form-item>
        <el-button type="primary" @click="onSubmit">申请公钥</el-button>
      </el-form-item>
      <el-form-item label="机构私钥：">
        <el-input v-model="form.name" type="textarea" :rows="3"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查看私钥</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Item } from "@/types/list";

@Component({
  components: {},
})
export default class Cer extends Vue {
  @Prop(Function) dialogClose!: () => void;
  @Prop(Object) currentRow!: Item;

  dialogVisible = true;
  form = {};

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
  // margin-bottom: 0;
}
</style>
