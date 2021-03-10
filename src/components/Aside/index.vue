<template>
  <el-scrollbar class="qd-aside">
    <slot></slot>
    <MenuRender
      :defaultActive="activeId"
      :defaultOpeneds="defaultOpeneds"
      :uniqueOpened="true"
      :collapse="isCollapse"
      :collapseTransition="false"
      :menus="menuData"
      :redirect="redirect"
    ></MenuRender>
  </el-scrollbar>
</template>
<style lang="scss" scoped src="./style.scss"></style>
<script>
import MenuRender from "./MenuRender.jsx";

export default {
  name: "Aside",
  components: { MenuRender },
  props: ["menuId", "menuData", "isCollapse"],
  data() {
    return {
      menus: [...this.menuData],
      activeId: 0,
      defaultOpeneds: [0],
      flag: false,
    };
  },
  created() {
    this.listFilter();
    this.setIndex();
  },
  mounted() {
    this.redirect = this.redirect.bind(this);
  },
  updated() {
    this.setIndex();
  },
  methods: {
    setIndex() {
      this.activeId = `${this.ergodic(this.menus, this.menuId)}`;
      this.flag = false;
    },

    ergodic(list, id) {
      let mid = 0;
      if (this.flag) return;
      for (let index = 0; index < list.length; index += 1) {
        const item = list[index];
        if (this.flag) break;
        if (item.name === id) {
          mid = item.id;
          this.flag = true;
          break;
        } else if (item.children) {
          mid = this.ergodic(item.children, id);
        }
      }
      return mid;
    },

    redirect({ url, menuId }) {
      if (/http:/g.test(url)) return;
      const path = menuId ? `${url}?mid=${menuId}` : url;
      this.$router.push(path);
    },
    formatId(menu, parent) {
      menu.forEach((item, index) => {
        if (parent) {
          item.id = `${parent.id}-${index}`;
        } else {
          item.id = `${index}`;
        }
        if (item.children) this.formatId(item.children, item);
      });
    },
    listFilter() {
      this.formatId(this.menus);
    },
  },
};
</script>
<style lang="scss">
.pro-layout-collapse .menu-tit {
  height: 0;
}
.menu-tit {
  position: relative;
  margin: 0 18px;
  line-height: 53px;
  height: 53px;
  overflow: hidden;
  text-align: center;
  color: #333;
  transition: 0.3s all ease-in-out;
  &::after,
  &::before {
    content: "\20";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    background-color: $-aside-menu-tit-line;
  }
  &::after {
    top: 26px;
  }
  &::before {
    top: 28px;
  }
  .txt {
    position: relative;
    font-weight: 500;
    z-index: 9;
    background-color: #fff;
    padding: 0 12px;
    white-space: nowrap;
  }
}
.el-aside-menu {
  position: fixed;
  top: 0;
  height: 100%;
}
.badge {
  height: auto;
  padding: 0;
  .el-badge__content {
    position: inherit;
    transform: none;
    background: rgba(255, 91, 91, 1);
    border-radius: 9px;
    margin: 7px 0 0 14px;
    height: 17px;
    line-height: 17px;
    border: none;
  }
}
.qd-aside .el-menu--collapse,
.qd-aside-collapse {
  width: auto !important;
  .el-tooltip {
    padding: 0 18px !important;
  }
  .el-submenu__icon-arrow {
    visibility: hidden;
  }
}
.qd-aside {
  .el-submenu__title {
    position: relative;
    line-height: 48px;
    height: 48px;
    color: #666;
    cursor: pointer;
    font-size: 14px;
    &::after {
      content: "\20";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: solid 1px rgba(245, 245, 249, 1);
    }
  }
  .el-submenu__title:hover,
  .is-active .el-submenu__title {
    color: $-aside-menu-color;
    background: rgba(245, 245, 249, 1);
    i {
      color: $-aside-menu-color;
    }
  }
}
.el-menu--popup {
  .item-children {
    height: 40px;
    line-height: 40px;
  }
  .item-children:hover,
  .item-children:focus {
    color: $-aside-menu-color;
    background: #f5f5f9;
  }
}
.mlink {
  text-decoration: none;
  color: #666;
}
</style>
