<template>
  <div class="footer">
    <slot>Copyright &copy; 2021 fe-admim</slot>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["extraClass"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.el-footer {
  text-align: center;
  margin-top: 16px;
}
.footer {
  line-height: 38px;
  color: #ccc;
  font-size: 12px;
  z-index: 200;
  text-align: center;
}
</style>
