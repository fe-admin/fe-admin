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

<script>
export default {
  name: "Exception403",
  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
