<template>
  <div class="dashboard">
    <!-- <Breadcrumb :dataInfo="breadcrumb">
      <div class="breadcrumb-btn">
        <el-button @click="showDialog('start')" type="bread">
          <b class="text">启用CA服务</b>
        </el-button>
      </div>
    </Breadcrumb> -->
    <el-row type="flex" class="dashboard-list" justify="space-between">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="title">账户信息</div>
          <div class="extra">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#icon-yonghuming" />
            </svg>
            <div class="info">
              账户名称：是是是<br />
              角色类型：是懂法守法
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <div class="title">消息信息</div>
          <div class="extra">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#icon-yonghuming" />
            </svg>
            <div class="info">
              账户名称：是是是<br />
              角色类型：是懂法守法
            </div>
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <div class="title">统计信息</div>
          <div class="extra">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#icon-yonghuming" />
            </svg>
            <div class="info">
              账户名称：是是是<br />
              角色类型：是懂法守法
            </div>
          </div>
        </div></el-col
      >
    </el-row>
    <div class="app-list">
      <div class="tit">应用列表</div>
      <el-row type="flex" justify="space-between">
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#fe-system2" />
            </svg>
            <div class="title">第三方信息系统</div>
            <div class="extra">
              文档<el-divider direction="vertical"></el-divider>点击进入
            </div>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#fe-system2" />
            </svg>
            <div class="title">第三方信息系统</div>
            <div class="extra">
              文档<el-divider direction="vertical"></el-divider>点击进入
            </div>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#fe-system2" />
            </svg>
            <div class="title">第三方信息系统</div>
            <div class="extra">
              文档<el-divider direction="vertical"></el-divider>点击进入
            </div>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple">
            <svg aria-hidden="true" class="icon icon2">
              <use xlink:href="#fe-system2" />
            </svg>
            <div class="title">第三方信息系统</div>
            <div class="extra">
              文档<el-divider direction="vertical"></el-divider>点击进入
            </div>
          </div></el-col
        >
        <el-col :span="10"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  &-list {
    margin-bottom: 16px;
    .title {
      padding: 0 24px;
      line-height: 54px;
      font-weight: 600;
    }
    .extra {
      display: flex;
      padding: 0 24px 24px;
      line-height: 22px;
      color: #697b8c;
    }
    .icon {
      width: 56px;
      height: 56px;
      margin-right: 12px;
    }
    .el-col {
      min-height: 160px;
    }
    .grid-content {
      height: 100%;
      margin-right: 16px;
      background-color: #fff;
      border-radius: 2px;
    }
    .el-col:last-child .grid-content {
      margin-right: 0;
    }
  }
}
.app-list {
  padding: 0 24px 24px;
  background-color: #fff;

  .tit {
    line-height: 54px;
    font-weight: 600;
  }
  .el-row {
    flex-wrap: wrap;
  }
  .el-col {
    min-width: 50%;
  }

  .grid-content {
    display: flex;
    align-items: center;
    border: 1px dashed #e9e9e9;
    height: 72px;
    margin: 0 10px 10px 0;
    padding-left: 4px;
    border-radius: 4px;
    .icon {
      width: 25px;
      height: 25px;
      margin: 0 12px;
    }
    .title {
      flex: 1;
    }
    .extra {
      padding: 0 12px;
    }
  }
}
</style>
