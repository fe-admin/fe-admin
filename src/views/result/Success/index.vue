<template>
  <fe-result
    status="success"
    :title="result.title"
    :sub-title="result.description"
  >
    <template #extra>
      <el-button type="primary">{{ "result.success.btn-return" }}</el-button>
      <el-button style="margin-left: 8px">{{
        "result.success.btn-project"
      }}</el-button>
      <el-button style="margin-left: 8px">{{
        "result.success.btn-print"
      }}</el-button>
    </template>
  </fe-result>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResultInfo } from "@/types/result";
@Component
export default class Success extends Vue {
  directionType = {
    horizontal: "horizontal",
    vertical: "vertical",
  };

  get result(): ResultInfo {
    return {
      title: "result.success.title",
      description: "result.success.description",
    };
  }
}
</script>
