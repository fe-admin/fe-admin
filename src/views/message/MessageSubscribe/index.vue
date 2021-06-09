<template>
  <with-header>
    <div class="table-list table-list-subscribe">
      <div class="table-list-content">
        <div class="table-list-tools">
          <div class="list-toobar-left">
            <el-button type="primary">添加接收人</el-button>
            <el-button plain>移除接收人</el-button>
          </div>

          <div class="list-toolbar-right">
            <el-input
              placeholder="请输入消息类型"
              v-model="search"
              clearable
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :data="filterData"
          tooltip-effect="dark"
          style="width: 100%"
          row-key="id"
          default-expand-all
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <template v-for="(item, index) in tableHead">
            <el-table-column
              :key="index"
              :label="item.label"
              :prop="item.name"
              show-overflow-tooltip
              tooltip-effect="dark"
              :width="columWidth[index]"
            >
              <template slot="header" slot-scope="scope">
                <template
                  v-if="item.name !== 'msgType' && item.name !== 'receiveUser'"
                >
                  <el-checkbox
                    :indeterminate="isIndeterminate[item.name]"
                    v-model="checkAll[item.name]"
                    @change="(val) => handleCheckAllChange(item.name, val)"
                    >{{ item.label }}</el-checkbox
                  >
                </template>
              </template>
              <template slot-scope="scope">
                <template
                  v-if="
                    ['web', 'email', 'mobile'].includes(
                      scope.column.property
                    ) && scope.row.web !== undefined
                  "
                >
                  <el-checkbox
                    @change="
                      (val) => handleCheckChange(scope.column.property, val)
                    "
                    v-model="scope.row[scope.column.property]"
                  ></el-checkbox>
                </template>
                <template v-else>
                  {{ scope.row[scope.column.property] }}
                </template>
              </template>
            </el-table-column>
          </template>
          <el-table-column label="操作">
            <a>修改接收人</a>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </with-header>
</template>

<script>
import { getSubscribeList } from "@/api";
import { sleep } from "@/utils";
export default {
  name: "messageSubscribe",
  data() {
    return {
      // 不确定属性
      isIndeterminate: {
        web: false,
        email: false,
        mobile: false,
      },
      // 全选动作
      checkAll: { web: false, email: false, mobile: false },
      search: "",
      loading: false,
      tableHead: [
        { name: "msgType", label: "消息类型" },
        { name: "web", label: "站内信" },
        { name: "email", label: "邮件" },
        { name: "mobile", label: "短信" },
        { name: "receiveUser", label: "接收人" },
      ],
      tableData: [],
      columWidth: [400],
    };
  },
  computed: {
    filterData() {
      const { tableData, search } = this;
      return tableData.filter(
        (data) =>
          !search || data.msgType.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
  mounted() {
    this.getSubscribeList();
  },
  methods: {
    async getSubscribeList() {
      this.loading = true;
      const [err, res] = await getSubscribeList();
      if (!err && res) {
        await sleep(1000);
        this.tableData = res;
        this.reset(Object.keys(this.isIndeterminate));
        this.loading = false;
      }
    },
    reset(type) {
      const numMap = {
        total: 0,
        web: 0,
        email: 0,
        mobile: 0,
      };
      this.tableData.forEach((item) => {
        if (item.children) {
          item.children.forEach((row) => {
            numMap.total += 1; // 总条数
            if (row.web) numMap.web += 1;
            if (row.email) numMap.email += 1;
            if (row.mobile) numMap.mobile += 1;
          });
        }
      });
      if (numMap.total) {
        if (Array.isArray(type)) {
          type.forEach((item) => this.setCheck(numMap, item));
        } else {
          this.setCheck(numMap, type);
        }
      }
    },
    setCheck(numMap, type) {
      if (numMap.total === numMap[type]) {
        this.isIndeterminate[type] = false;
        this.checkAll[type] = true;
      } else {
        this.isIndeterminate[type] = true;
      }
    },
    handleCheckAllChange(type, val) {
      this.isIndeterminate[type] = false;
      this.tableData.forEach((item) => {
        if (item.children) {
          item.children.forEach((row) => (row[type] = val));
        }
      });
    },
    handleCheckChange(type, val) {
      this.reset(type);
    },
  },
};
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
<style lang="scss" scoped>
.table-list-subscribe .table-list-content {
  padding-bottom: 16px;
}
</style>
