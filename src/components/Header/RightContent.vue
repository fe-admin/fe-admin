<template>
  <el-menu class="header-user" mode="horizontal">
    <el-submenu index="1">
      <template slot="title">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#fe-user" />
        </svg>
        <span class="text">{{ accountName }}</span>
      </template>
      <el-menu-item index="1-1" @click="logout">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import { mapGetters } from "vuex";
import { removeToken } from "@/utils/auth";

export default {
  name: "HeaderRightContent",
  computed: {
    ...mapGetters(["accountName"]),
  },
  methods: {
    async logout() {
      localStorage.clear();
      removeToken();
      this.$router.replace("/user/login");
    },
  },
};
</script>
<style lang="scss">
.header-user.el-menu--horizontal {
  border: none !important;
  .el-menu-item,
  .el-submenu {
    display: flex;
    align-items: center;
    height: 46px;
    line-height: 46px;
    border: none !important;
    color: #fff !important;
    padding: 0 9px;
    font-weight: 400;
  }
}
.header-user {
  font-size: 14px;
  color: #fff;
  padding-left: 30px;
  padding-right: 18px;
  background: transparent !important;

  > .el-menu-item:not(.is-disabled):hover,
  > .el-menu-item:not(.is-disabled):focus {
    background: transparent !important;
    color: #fff !important;
  }
  .el-submenu__title {
    display: flex;
    align-items: center;
    background: transparent !important;
    height: 46px !important;
    line-height: 46px !important;
    border: none !important;
    color: #fff !important;
    padding: 0;
    .icon {
      width: 26px;
      height: 26px;
    }
    i {
      color: #fff;
    }
    .text {
      margin: 0 8px;
    }
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
