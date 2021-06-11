<template>
  <fe-result
    status="error"
    :title="result.title"
    :sub-title="result.description"
  >
    <template #extra>
      <el-button type="primary">{{ "result.fail.error.btn-text" }}</el-button>
    </template>
    <div class="desc">
      <div
        style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 16px"
      >
        {{ "result.fail.error.hint-title" }}
      </div>
      <div style="margin-bottom: 16px">
        <a-icon
          type="close-circle-o"
          style="color: #f5222d; margin-right: 8px"
        />
        {{ "result.fail.error.hint-text1" }}
        <a style="margin-left: 16px"
          >{{ "result.fail.error.hint-btn1" }} <a-icon type="right"
        /></a>
      </div>
      <div>
        <a-icon
          type="close-circle-o"
          style="color: #f5222d; margin-right: 8px"
        />
        {{ "result.fail.error.hint-text2" }}
        <a style="margin-left: 16px"
          >{{ "result.fail.error.hint-btn2" }} <a-icon type="right"
        /></a>
      </div>
    </div>
  </fe-result>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResultInfo } from "@/types/result";
@Component
export default class Error extends Vue {
  get result(): ResultInfo {
    return {
      title: "result.fail.error.title",
      description: "result.fail.error.description",
    };
  }
}
</script>
