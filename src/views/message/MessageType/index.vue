<template>
  <with-header>
    <div class="table-list table-list-subscribe">
      <div class="table-list-content">
        <div class="table-list-tools">
          <div class="list-toobar-left">
            <el-button type="primary">添加类别</el-button>
          </div>

          <div class="list-toolbar-right">
            <el-input
              placeholder="请输入类别名称"
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
          <el-table-column
            label="消息类型"
            prop="msgType"
            tooltip-effect="dark"
            min-width="80%"
          >
            <template slot-scope="scope">
              {{ scope.row[scope.column.property] }}
            </template>
          </el-table-column>

          <el-table-column label="操作" min-width="20%">
            <template slot-scope="scope">
              <template v-if="scope.row.web !== undefined">
                <a>删除</a>
                <el-divider direction="vertical"></el-divider>
                <a>编辑</a>
              </template>
              <template v-else>
                <a>删除</a>
                <el-divider direction="vertical"></el-divider>
                <a>编辑</a>
                <el-divider direction="vertical"></el-divider>
                <a>添加</a>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </with-header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getSubscribeList } from "@/api";
import { sleep } from "@/utils";
@Component
export default class messageSubscribe extends Vue {
  search = "";
  loading = false;
  tableHead = [{ name: "msgType", label: "消息类型" }];
  tableData = [];
  get filterData() {
    const { tableData, search } = this;
    return tableData.filter(
      (data: { msgType: string }) =>
        !search || data.msgType.toLowerCase().includes(search.toLowerCase())
    );
  }

  mounted(): void {
    this.getSubscribeList();
  }

  async getSubscribeList(): Promise<unknown> {
    this.loading = true;
    const [err, res] = await getSubscribeList();
    if (!err && res) {
      await sleep(1000);
      this.tableData = res;
      this.loading = false;
    }
    return;
  }
}
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
<style lang="scss" scoped>
.table-list-subscribe .table-list-content {
  padding-bottom: 16px;
}
</style>
