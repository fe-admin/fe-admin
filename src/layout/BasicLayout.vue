<template>
  <fe-layout
    :isCollapse="isCollapse"
    :menuData="menuData"
    :menuId="menuId"
    :toggleCollapse="toggleCollapse"
    :updateMenuId="updateMenuId"
  >
    <template v-slot:logo>
      <div class="logo-wrapper">
        <img src="/favicon.png" width="32" height="32" />
        <svg-icon iconName="fe-logo-text" />
      </div>
    </template>
    <template v-slot:headerMenu> <HeaderMenu /></template>
    <template v-slot:headerRightContent><HeaderRightContent /></template>
    <template v-if="menuTitle" v-slot:asideTitle>
      <div class="menu-tit">
        <span class="txt">{{ menuTitle }}</span>
      </div>
    </template>
    <template v-slot:footer> </template>
    <router-view />
  </fe-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import defaultSettings from "@/config";
import HeaderMenu from "@/components/Header/Menu";
import HeaderRightContent from "@/components/Header/RightContent";
import storage from "store";

export default {
  name: "BasicLayout",
  components: { HeaderMenu, HeaderRightContent },
  data() {
    return {
      title: defaultSettings.title,
      menuTitle: "前端中台系统",
      menuData: storage.get("menus"),
      menuId: this.$route.name,
    };
  },
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  methods: {
    ...mapActions(["toggleCollapse", "updateMenuId"]),
  },
  updated() {
    const { name } = this.$route;
    this.menuId = name;
  },
};
</script>
<style lang="scss">
.fe-layout-collapse {
  .el-aside,
  .fe-aside {
    transition-property: width, height;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    width: 54px !important;
  }
  .main-content {
    padding-left: 71px;
  }
}
</style>
