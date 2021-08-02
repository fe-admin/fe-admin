<template>
  <el-menu class="header-nav" mode="horizontal">
    <!-- <el-menu-item index="0" @click="go">管理控制台</el-menu-item> -->
  </el-menu>
</template>
<script>
import { loginOut } from "@/api";

export default {
    name: "HeaderMenu",
    methods: {
        go() {
            this.$router.replace("/dashboard");
        },
    },
};
</script>
<style lang="scss">
.el-header {
  z-index: 2001;
}
.header-nav.el-menu--horizontal {
  border: none !important;
  .el-menu-item {
    display: flex;
    align-items: center;
    height: 46px;
    line-height: 46px;
    border: none !important;
    color: #fff !important;
    padding: 0 9px;
    font-weight: 400;
    i {
      color: rgba(245, 236, 255, 1);
    }
  }
}
.header-nav {
  font-size: 14px;
  color: #fff;
  padding-left: 30px;
  padding-right: 18px;
  flex: 1;
  background: transparent !important;

  > .el-menu-item:not(.is-disabled):hover,
  > .el-menu-item:not(.is-disabled):focus {
    background: transparent !important;
    color: #fff !important;
  }
  > .el-submenu .el-submenu__title:hover {
    background: transparent !important;
  }
  > .el-submenu:focus .el-submenu__title,
  > .el-submenu.is-active .el-submenu__title,
  > .el-submenu:hover .el-submenu__title {
    color: #fff;
  }
}
.el-menu--popup-bottom-start {
  margin-top: 0 !important;
}
.el-menu--popup {
  min-width: 100px !important;
}
</style>
