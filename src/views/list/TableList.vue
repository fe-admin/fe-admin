<template>
  <with-header>
    <template #content>
      查询表格
    </template>
    <div class="table-list">
      <el-form
        class="search-form"
        label-width="120px"
        :model="form"
        size="mini"
      >
        <el-form-item label="规则名称" for="name">
          <el-input id="name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" for="desc">
          <el-input id="desc" v-model="form.desc"></el-input>
        </el-form-item>
        <template v-if="collapsed">
          <el-form-item label="服务调用次数" for="callNo">
            <el-input v-model="form.type" id="callNo"></el-input>
          </el-form-item>
          <el-form-item label="状态" for="status">
            <el-input v-model="form.type" id="status"></el-input>
          </el-form-item>
          <el-form-item label="上次调度时间" for="updatedAt">
            <el-input
              v-model="form.type"
              id="updatedAt"
            ></el-input> </el-form-item
        ></template>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" :loading="true">查询</el-button>
          <CollapseButton :collapsed="collapsed" :onChange="onCollapse" />
        </el-form-item>
      </el-form>
      <div class="table-list-content">
        <div class="table-list-tools">
          <span class="title">表格查询</span>
          <div class="list-toolbar-right">
            <el-button type="primary">查询</el-button>
          </div>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </with-header>
</template>

<script>
import CollapseButton from "./CollapseButton";
export default {
  name: "TableList",
  components: { CollapseButton },
  data() {
    return {
      collapsed: false,
      form: {
        name: "",
        desc: "",
        callNo: "",
        status: "",
        updatedAt: "",
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    onCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style lang="scss" scoped>
.table-list {
  .search-form {
    display: flex;
    margin-bottom: 16px;
    padding: 24px 24px 0;
    background: #fff;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .el-form-item {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
    /deep/ label:after {
      content: ":";
      margin: 0 -4px 0 2px;
    }
  }
  .collapse-button {
    margin-left: 10px;
  }
  .table-list-content {
    padding: 0 24px;
    background: #fff;
    overflow: hidden;
    /deep/thead th {
      background-color: #fafafa;
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .table-list-tools {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
    }
  }
  .el-pagination {
    text-align: right;
    margin: 16px 0;
  }
}
</style>
