<template>
  <fe-result
    status="500"
    title="500"
    sub-title="Sorry, the server is reporting an error."
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
export default class Exception500 extends Vue {
  toHome(): void {
    this.$router.push({ path: "/" });
  }
}
</script>
