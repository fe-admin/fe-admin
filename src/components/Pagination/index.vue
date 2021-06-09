<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
    :page-sizes="pageSizes"
    :page-size.sync="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  >
  </el-pagination>
</template>
<script>
export default {
  name: "FePagination",
  props: ["pageSize", "currentPage", "total"],
  data() {
    return {
      pageSizes: [10, 20, 50, 100],
    };
  },
  methods: {
    handleSizeChange(pageSize) {
      const { currentPage } = this;
      this.$emit("update:pageSize", pageSize);
      this.$emit("pagination", { pageSize, currentPage });
    },
    handleCurrentChange(currentPage) {
      const { pageSize } = this;
      this.$emit("update:currentPage", currentPage);
      this.$emit("pagination", { pageSize, currentPage });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-pagination {
  text-align: right;
  margin: 16px 0;
}
</style>
