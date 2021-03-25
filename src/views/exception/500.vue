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

<script>
export default {
  name: "Exception500",
  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
