<template>
  <with-header>
    <template #content>
      <template v-if="readType === 0"
        >共{{ total }}封，其中{{ unread }}封未读，<a @click="changeReadType(1)"
          >仅查看未读消息</a
        ></template
      >
      <template v-else
        >未读{{ unread }}封，<a @click="changeReadType(0)"
          >查看全部消息</a
        ></template
      >
    </template>

    <div class="table-list">
      <div class="search-form">
        <el-radio-group v-model.number="type" @change="getMessageList">
          <el-radio-button label="0">全部</el-radio-button>
          <el-radio-button label="1">产品消息</el-radio-button>
          <el-radio-button label="2">财务消息</el-radio-button>
          <el-radio-button label="3">运维消息</el-radio-button>
        </el-radio-group>
      </div>
      <div class="table-list-content">
        <div class="table-list-tools">
          <div class="list-toobar-left">
            <el-button plain disabled>删除</el-button>
            <el-button plain>标记已读</el-button>
            <el-button plain>全部标记已读</el-button>
          </div>

          <div class="list-toolbar-right">
            <el-input
              placeholder="请输入消息内容"
              v-model="search"
              clearable
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div v-if="selectNum">{{ selectNum }}</div>
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :data="filterData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="45"> </el-table-column>
          <template v-for="(item, index) in tableHead">
            <el-table-column
              sortable
              :key="index"
              :label="item.label"
              :prop="item.name"
              :show-overflow-tooltip="true"
              :width="columWidth[index]"
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
            <a>删除</a>
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
import { getMessageList } from "@/api";
import { sleep } from "@/utils";
import { pageMixin } from "@/mixins";
export default {
  name: "MessageList",
  mixins: [pageMixin],
  data() {
    return {
      search: "",
      loading: false,
      selectNum: 0,
      type: 0,
      unread: 0,
      readType: 0,
      columWidth: [500],
      tableHead: [
        { name: "content", label: "消息内容" },
        { name: "type", label: "消息类型" },
        { name: "subType", label: "消息子类型" },
        { name: "receiveTime", label: "接收时间" },
      ],
      tableData: [],
    };
  },
  computed: {
    filterData() {
      const { tableData, search } = this;
      return tableData.filter(
        (data) =>
          !search || data.content.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
  mounted() {
    this.getMessageList();
  },
  methods: {
    async getMessageList(page, pageSize) {
      this.loading = true;
      const { type, currentPage, readType } = this;
      const [err, res] = await getMessageList({
        type,
        page: page || currentPage,
        pageSize: pageSize || this.pageSize,
        readType,
      });
      if (!err && res) {
        await sleep(1000);
        this.tableData = res.data;
        this.unread = res.unread;
        this.total = res.total;
        this.currentPage = res.currentPage;
        this.loading = false;
      }
    },
    handleSizeChange(pageSize) {
      this.getMessageList(null, pageSize);
    },
    handleCurrentChange(page) {
      this.getMessageList(page);
    },
    changeReadType(type) {
      this.getMessageList();
      this.readType = type;
    },
    handleSelectionChange(v) {
      this.selectNum = v.length;
    },
  },
};
</script>
<style lang="scss" src="./style/index.scss" scoped></style>
