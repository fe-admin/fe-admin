<template>
  <el-dialog
    title="添加"
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
      <el-form-item prop="name" label="规则名称：" for="name">
        <el-input
          placeholder="请输入规则名称"
          id="name"
          v-model="addForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="desc" label="描述：" for="desc">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入描述"
          id="desc"
          v-model="addForm.desc"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm">重 置</el-button>
      <el-button type="primary" @click="add()" :loading="loading"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Ref, Prop, Vue } from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";
import { sleep } from "@/utils";

@Component({
  components: {},
})
export default class Add extends Vue {
  @Prop(Function) dialogClose!: () => void;
  @Prop(Function) refresh!: () => void;
  @Ref("form") readonly formEle!: ElForm;
  loading = false;
  dialogVisible = true;
  addForm = {
    desc: "",
    name: "",
  };
  formRule = {
    name: [
      {
        required: true,
        message: "请输入规则名称",
        trigger: ["change", "blur"],
      },
    ],
    desc: [
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
  add(): void {
    this.formEle.validate(async (res) => {
      if (res) {
        this.loading = true;
        await sleep(1000);
        this.handleClose();
        this.refresh();
      }
      this.loading = false;
    });
  }
}
</script>
<style lang="scss" scoped></style>
