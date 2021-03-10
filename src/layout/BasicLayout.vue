<template>
  <pro-layout :isCollapse="isCollapse" :menuData="menuData" :menuId="menuId">
    <template v-slot:logo> </template>
    <template v-if="menuTitle" v-slot:asideTitle>
      <div class="menu-tit">
        <span class="txt">{{ menuTitle }}</span>
      </div>
    </template>
    <template v-slot:footer> </template>
    <router-view />
  </pro-layout>
</template>

<script>
import { mapGetters } from "vuex";
import defaultSettings from "@/config/defaultSettings";

import { tbsMenus } from "@/config";

export default {
  name: "BasicLayout",
  data() {
    return {
      title: defaultSettings.title,
      menuTitle: "前端中台系统",
      menuData: tbsMenus,
      menuId: this.$route.name,
    };
  },
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  mounted() {
    console.info(this.$route);
  },
};
</script>
<style lang="scss">
.pro-layout-collapse {
  .el-aside,
  .qd-aside {
    width: 54px !important;
  }
  .main-content {
    padding-left: 71px;
  }
}
</style>
