<template>
  <el-dialog
    title="编辑"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form
      ref="form"
      :rules="formRule"
      class="add-form"
      label-width="120px"
      :model="addForm"
    >
      <el-form-item prop="date" label="截止时间：" for="date">
        <el-date-picker
          v-model="addForm.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="url" label="跳转地址：" for="url">
        <el-input
          placeholder="请输入跳转地址"
          id="url"
          v-model="addForm.url"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm">重 置</el-button>
      <el-button type="primary" @click="submit()" :loading="loading"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Ref, Prop, Vue } from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";
import { Item } from "@/types/list";
import { sleep } from "@/utils";

@Component({
  components: {},
})
export default class Add extends Vue {
  @Prop(Function) dialogClose!: () => void;
  @Prop(Function) edite!: (param: Item) => void;
  @Prop(Object) currentRow!: Item;
  @Ref("form") readonly formEle!: ElForm;
  loading = false;
  dialogVisible = true;
  addForm = {
    date: "",
    url: "",
  };
  formRule = {
    url: [
      {
        required: true,
        message: "请输入规则名称",
        trigger: ["change", "blur"],
      },
    ],
    date: [
      {
        required: true,
        message: "请输入描述",
        trigger: ["change", "blur"],
      },
    ],
  };
  handleClose(): void {
    this.dialogVisible = false;
    this.dialogClose();
  }
  resetForm(): void {
    this.formEle.resetFields();
  }
  submit(): void {
    this.formEle.validate(async (res) => {
      if (res) {
        this.loading = true;
        await sleep(1000);
        this.handleClose();
        this.edite({ ...this.currentRow, ...this.addForm });
      }
      this.loading = false;
    });
  }
}
</script>
<style lang="scss" scoped></style>
