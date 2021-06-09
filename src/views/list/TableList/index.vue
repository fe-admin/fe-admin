<template>
  <with-header>
    <template #content>
      查询表格
    </template>
    <div class="table-list">
      <el-form
        ref="searchForm"
        class="search-form"
        label-width="120px"
        :model="searchForm"
        size="mini"
      >
        <el-form-item prop="name" label="规则名称" for="name">
          <el-input
            placeholder="请输入"
            id="name"
            v-model="searchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="desc" label="描述" for="desc">
          <el-input
            placeholder="请输入"
            id="desc"
            v-model="searchForm.desc"
          ></el-input>
        </el-form-item>
        <template v-if="collapsed">
          <el-form-item prop="callNo" label="服务调用次数" for="callNo">
            <el-input
              placeholder="请输入"
              v-model="searchForm.callNo"
              id="callNo"
            ></el-input>
          </el-form-item>
          <el-form-item prop="status" label="状态" for="status">
            <el-select
              v-model="searchForm.status"
              placeholder="请选择"
              id="status"
            >
              <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="updatedAt" label="上次调度时间" for="updatedAt">
            <el-date-picker
              v-model="searchForm.updatedAt"
              type="datetime"
              id="updatedAt"
              placeholder="选择日期时间"
            >
            </el-date-picker></el-form-item
        ></template>
        <el-form-item>
          <el-button @click="resetForm('searchForm')">重置</el-button>
          <el-button type="primary" :loading="loading">查询</el-button>
          <CollapseButton :collapsed="collapsed" :onCollapse="onCollapse" />
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
          v-loading="loading"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <template v-for="(item, index) in tableHead">
            <el-table-column
              sortable
              :key="index"
              :label="item.label"
              :prop="item.name"
              show-overflow-tooltip
              tooltip-effect="dark"
            >
              <template slot-scope="scope">
                <template v-if="scope.column.property !== 'statusStr'">{{
                  scope.row[scope.column.property]
                }}</template>
                <template v-else>
                  <span
                    :class="`status-icon status-icon-${scope.row.status}`"
                  ></span
                  >{{ scope.row[scope.column.property] }}
                </template>
              </template>
            </el-table-column>
          </template>
          <el-table-column label="操作">
            <a>配置</a>
            <el-divider direction="vertical"></el-divider>
            <a>订阅报警</a>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </with-header>
</template>

<script>
import CollapseButton from "@/components/CollapseButton";
import { getTableList } from "@/api";
import { sleep } from "@/utils";
import { pageMixin } from "@/mixins";
export default {
  name: "TableList",
  components: { CollapseButton },
  mixins: [pageMixin],
  data() {
    return {
      loading: false,
      collapsed: false,
      searchForm: {
        name: "",
        desc: "",
        callNo: "",
        status: "",
        updatedAt: "",
      },
      tableHead: [
        { name: "name", label: "规则名称" },
        { name: "desc", label: "描述" },
        { name: "callNo", label: "服务调用次数" },
        { name: "statusStr", label: "状态" },
        { name: "updatedAt", label: "上次调用时间" },
      ],
      tableData: [],
    };
  },
  mounted() {
    this.getTableList();
  },
  methods: {
    handleSelectionChange() {},
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    },
    async getTableList(page, pageSize) {
      this.loading = true;
      const [err, res] = await getTableList({
        page: page || this.currentPage,
        pageSize: pageSize || this.pageSize,
      });
      if (!err && res) {
        await sleep(1000);
        this.tableData = res.data;
        this.total = res.total;
        this.currentPage = res.currentPage;
        this.loading = false;
      }
    },
    handleSizeChange(pageSize) {
      this.getTableList(null, pageSize);
    },
    handleCurrentChange(page) {
      this.getTableList(page);
    },

    onCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style lang="scss" src="./style.scss" scoped></style>
