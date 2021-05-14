<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 40, 50]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  >
  </el-pagination>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
