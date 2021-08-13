<template src="./tpl.html"> </template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getDicMap } from "@/utils";

@Component({})
export default class FormStep extends Vue {
  loading = false;
  editeRowIndex = -1;
  editeRow = {};
  active = 0;
  formData = {
    payAccount: "",
    receiverAccount: "",
    receiverName: "",
    count: "",
    payPwd: "",
  };
  payAccountList = [{
    value:0,
    label: 'ant-design@alipay.com'
  }]
  payAccountMap = getDicMap(this.payAccountList);
  
  next(step: number): void {
    this.active = step;
  }
  
}
</script>
<style lang="scss" src="./style.scss" scoped></style>
