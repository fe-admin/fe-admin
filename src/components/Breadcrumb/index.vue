<template>
  <section class="qd-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-if="!dataInfo.back">
        <template v-if="dataInfo.items">
          <template v-for="item in dataInfo.items">
            <el-breadcrumb-item
              v-if="item.path && item.path !== -1"
              :to="{ path: item.path }"
              >{{ item.name }}</el-breadcrumb-item
            >
            <el-breadcrumb-item v-else-if="item.path && item.path === -1">
              <a @click="$router.back()">{{ item.name }}</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-else>{{ item.name }}</el-breadcrumb-item>
          </template>
        </template>
        <div v-else class="tit">
          <span class="text">{{ dataInfo.title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-breadcrumb> -->
  </section>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["dataInfo", "menuData", "menuId"],
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    },
    to(router) {
      if (router) this.$router.replace(router);
    },
  },
};
</script>
<style lang="scss">
.qd-breadcrumb {
  height: 46px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(233, 233, 248, 1);
  border-radius: 4px;
  padding: 7px 18px;
  margin-bottom: 16px;
  .el-breadcrumb {
    display: flex;
  }

  .tit {
    position: relative;
    padding-left: 16px;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    color: rgba(38, 38, 38, 1);
    line-height: 32px;
    .el-tooltip {
      margin-left: 12px;
    }
    .icon {
      color: rgba(94, 94, 118, 1);
    }
    &:before {
      content: "\20";
      position: absolute;
      left: 0;
      top: 11px;
      border: solid 6px transparent;
      border-left-color: #281945;
      border-top-width: 5px;
      border-bottom-width: 5px;
    }
  }
  .el-breadcrumb__item {
    line-height: 32px;
  }

  .el-breadcrumb__item:first-child {
    position: relative;
    padding-left: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #262626;
    &:before {
      content: "\20";
      position: absolute;
      left: 0;
      top: 11px;
      border: solid 6px transparent;
      border-left-color: #281945;
      border-top-width: 5px;
      border-bottom-width: 5px;
    }
  }
  .el-breadcrumb__item:last-of-type {
    .el-breadcrumb__separator {
      display: none;
    }
  }

  .tit-back {
    padding-left: 0;
    .back .icon {
      color: rgba(38, 38, 38, 1);
      width: 12px;
      cursor: pointer;
    }
    .el-divider {
      vertical-align: -0.15em;
      background-color: rgba(217, 217, 217, 1);
    }
    &:before {
      display: none;
    }
  }
  .breadcrumb-btn {
    flex: 1;
    text-align: right;
  }
}
.full-content .el-breadcrumb {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
