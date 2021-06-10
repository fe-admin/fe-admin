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
  props: ["limit", "page", "total"],
  data() {
    return {
      pageSizes: [10, 20, 50, 100],
    };
  },
  computed: {
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
  },
  methods: {
    handleSizeChange(pageSize) {
      const { currentPage } = this;
      this.$emit("pageChange", { pageSize, currentPage });
    },
    handleCurrentChange(currentPage) {
      const { pageSize } = this;
      this.$emit("pageChange", { pageSize, currentPage });
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
