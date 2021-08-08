<template>
  <el-menu class="header-user" mode="horizontal">
    <el-submenu index="1">
      <template slot="title">
        <svg-icon iconName="fe-boy" />
        <span class="text">{{ accountName }}</span>
      </template>
      <el-menu-item index="1-1" @click="logout"
        ><svg-icon iconName="fe-user" />个人中心</el-menu-item
      >
      <el-menu-item index="1-2" @click="logout"
        ><svg-icon iconName="fe-setting" />个人设置</el-menu-item
      >
      <el-menu-item index="1-3" @click="logout"
        ><svg-icon iconName="fe-logout" />退出登录</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>
<script>
import { loginOut } from "@/api/user";
import { mapGetters } from "vuex";
import { removeToken } from "@/utils/auth";

export default {
    name: "HeaderRightContent",
    computed: {
        ...mapGetters(["accountName"]),
    },

    methods: {
        async logout() {
            await loginOut();
            removeToken();
            this.$router.push("/user/login");
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
    height: 48px;
    line-height: 48px;
    border: none !important;
    color: #fff !important;
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
    height: 48px !important;
    line-height: 48px !important;
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
.el-menu--horizontal {
  .el-menu .el-menu-item,
  .el-menu .el-submenu__title {
    height: 32px !important;
    line-height: 32px !important;
    color: #909399;
    min-width: 160px;
  }

  .icon {
    margin-right: 8px;
  }
}
</style>
