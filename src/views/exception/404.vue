<template>
  <fe-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <el-button type="primary" @click="toHome">
        Back Home
      </el-button>
    </template>
  </fe-result>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Exception404 extends Vue {
  toHome(): void {
    this.$router.push({ path: "/" });
  }
}
</script>
