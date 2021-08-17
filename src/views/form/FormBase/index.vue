<template src="./tpl.html"> </template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import { ElForm } from "element-ui/types/form";
import { sleep, scrollIntoView } from "@/utils";

@Component({})
export default class FormBase extends Vue {
  @Ref("form") readonly formEle!: ElForm;
  @Ref("title") readonly titleEle!: ElForm;
  loading = false;
  editeRowIndex = -1;
  editeRow = {};
  formData = {
    title: "",
    date: "",
    desc: "",
    radio: 0,
    weight: 0,
    standard: "",
    invitation: "",
    user: "",
    area: null,
  };
  formRule = {
    title: [
      {
        required: true,
        message: "请输入标题",
        trigger: ["change", "blur"],
      },
    ],
    date: [
      {
        required: true,
        message: "请选择起止日期",
        trigger: ["change", "blur"],
      },
    ],

    desc: [
      {
        required: true,
        message: "请输入目标描述",
        trigger: ["change", "blur"],
      },
    ],
    standard: [
      {
        required: true,
        message: "请输入衡量标准",
        trigger: ["change", "blur"],
      },
    ],
  };
  resetForm(): void {
    this.formEle.resetFields();
    scrollIntoView(this.titleEle.$el);
  }
  submitForm(): void {
    this.formEle.validate(async (res) => {
      if (res) {
        this.loading = true;
        await sleep(1000);
        this.$notify({
          title: "成功",
          message: "添加成功！",
          type: "success",
        });
        await sleep(1000);
        this.resetForm();
      } else {
        await this.$nextTick();
        scrollIntoView();
      }
      this.loading = false;
    });
  }
}
</script>
<style lang="scss" src="./style.scss" scoped></style>
