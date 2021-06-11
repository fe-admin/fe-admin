<template>
  <fe-result
    status="403"
    title="403"
    sub-title="Sorry, you don't have access to this page."
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
export default class Exception403 extends Vue {
    toHome(): void {
        this.$router.push({ path: "/" });
    }
}
</script>
