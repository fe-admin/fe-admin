<template>
  <fe-layout
    :isCollapse="isCollapse"
    :menuData="routers"
    :menuId="menuId"
    :toggleCollapse="toggleCollapse"
    :updateMenuId="updateMenuId"
    :showTagViews="true"
  >
    <template v-slot:logo>
      <div class="logo-wrapper">
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
    <template v-slot:footer></template>
    <router-view />
  </fe-layout>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import defaultSettings from "@/config";
import HeaderMenu from "@/components/Header/Menu";
import HeaderRightContent from "@/components/Header/RightContent";
const state = Vue.observable({ count: 0 });

export default {
  name: "BasicLayout",
  components: { HeaderMenu, HeaderRightContent },
  provide: {
    foo: {
      name: "bar",
      state,
    },
  },
  data() {
    return {
      title: defaultSettings.title,
      menuTitle: "前端中台系统",
      menuId: this.$route.name,
    };
  },
  computed: {
    ...mapGetters(["isCollapse", "routers"]),
  },
  methods: {
    ...mapActions(["toggleCollapse", "updateMenuId"]),
  },
  mounted() {
    setInterval(() => {
      this._provided.foo.state.count += 1;
    }, 5000);
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
