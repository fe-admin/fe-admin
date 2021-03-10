<template>
  <div class="header">
    <router-link class="logo" to="/">
      <slot><Logo /></slot>
      <el-divider direction="vertical"></el-divider
    ></router-link>

    <el-menu class="header-nav" mode="horizontal">
      <el-menu-item
        index="0"
        @click="pushState('/res/index', '/dashboard', 'resources')"
        >管理控制台</el-menu-item
      >
      <el-submenu class="header-user" index="1">
        <template slot="title">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#fe-user" />
          </svg>
          <span class="text">{{ getUserName() }}</span>
        </template>
        <el-menu-item index="1-1" @click="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped src="./style.scss"></style>
<script>
import { mapGetters } from "vuex";
import { loginOut } from "../../api";
import mixins from "../../mixins";
import Logo from "../Logo";

export default {
  mixins: [mixins],
  name: "Header",
  components: { Logo },
  computed: {
    ...mapGetters(["getUserName"]),
  },
  methods: {
    async logout() {
      try {
        await loginOut();
      } catch (err) {}
      localStorage.clear();
      this.locationReplace("/user/login");
    },
  },
};
</script>
<style lang="scss">
.header-nav {
  font-size: 14px;
  color: #fff;
  padding-left: 30px;
  padding-right: 18px;
  flex: 1;
  background: transparent !important;
  border: none;
  > .el-submenu .el-submenu__title {
    display: flex;
    align-items: center;
    height: 46px !important;
    line-height: 46px !important;
    border: none;
    color: #fff !important;
    padding: 0 9px;
    font-weight: 400;
    i {
      color: rgba(245, 236, 255, 1);
    }
  }
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
