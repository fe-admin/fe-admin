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
        <TableAlert
          v-if="selectNum"
          :selectNum="selectNum"
          :clearSelection="clearSelection"
        />
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
        <FePage
          :total="total"
          :page-size.sync="pageSize"
          :current-page.sync="currentPage"
          @pagination="getMessageList"
        />
      </div>
    </div>
  </with-header>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import { getMessageList } from "@/api";
import { sleep } from "@/utils";
import TableAlert from "@/components/TableAlert";
import { ElTable } from "element-ui/types/table";
import { MsgItem, MsgList } from "@/types/message";
import FePage from "@/components/Pagination";

@Component({
  components: { TableAlert, FePage },
})
export default class MessageList extends Vue {
  search = "";
  loading = false;
  selectNum = 0;
  type = 0;
  unread = 0;
  currentPage = 1;
  pageSize = 10;
  total = 0;
  readType = 0;
  columWidth = [500];
  tableHead = [
    { name: "content", label: "消息内容" },
    { name: "type", label: "消息类型" },
    { name: "subType", label: "消息子类型" },
    { name: "receiveTime", label: "接收时间" },
  ];
  tableData = [];
  @Ref("multipleTable") readonly multipleTableEle!: ElTable;
  get filterData(): MsgList {
    const { tableData, search } = this;
    return tableData.filter(
      (data: MsgItem) =>
        !search || data.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  mounted(): void {
    this.getMessageList();
  }
  async getMessageList(
    page?: number | undefined | Record<string, unknown>
  ): Promise<unknown> {
    this.loading = true;
    const { type, currentPage, pageSize, readType } = this;
    const params = {
      type,
      readType,
    };
    if (typeof page === "object") {
      Object.assign(params, page);
    } else {
      Object.assign(params, {
        page: currentPage,
        pageSize,
      });
    }
    const [err, res] = await getMessageList(params);
    if (!err && res) {
      await sleep(1000);
      this.tableData = res.data;
      this.unread = res.unread;
      this.total = res.total;
      this.loading = false;
    }
    return;
  }

  async changeReadType(type: number): Promise<unknown> {
    this.readType = type;
    await this.$nextTick();
    return this.getMessageList();
  }
  handleSelectionChange(v: []): void {
    this.selectNum = v.length;
  }
  clearSelection(): void {
    this.multipleTableEle.clearSelection();
  }
}
</script>
<style lang="scss" src="../style/index.scss" scoped></style>
