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
              <span style="float:right;" v-if="scope.$index === 1"
                >起止日期：2021-08-1 10:30 ~ 2021-08-16 12:20</span
              >
            </template>
          </el-table-column>

          <el-table-column label="操作" min-width="20%">
            <template slot-scope="scope">
              <template v-if="scope.row.web !== undefined">
                <template v-if="scope.$index === 1">
                  <el-switch
                    v-model="close"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    @change="onSwitch"
                  >
                  </el-switch>
                  <el-divider v-if="close" direction="vertical"></el-divider>
                  <a v-if="close">编辑</a>
                </template>
                <template v-else>
                  <a>删除</a>
                  <el-divider direction="vertical"></el-divider>
                  <a>编辑</a>
                </template>
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
    <component
      v-bind:is="dialogShow"
      :dialogClose="dialogClose"
      :currentRow="currentRow"
      :edite="edite"
    ></component>
  </with-header>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { getSubscribeList } from "@/api/message";
import { sleep } from "@/utils";
import DialogMixin from "@/mixins/dialog";
import { dialogCloseType } from "@/types/element";
import { Item } from "@/types/list";

@Component({
  components: {
    Edite: () => import("./component/edite"),
  },
})
export default class messageSubscribe extends Mixins(DialogMixin) {
  search = "";
  loading = false;
  close = false;
  dialogShow = "";
  tableHead = [{ name: "msgType", label: "消息类型" }];
  tableData: Item[] = [];
  dialogClose!: dialogCloseType;
  private get filterData() {
    const { tableData, search } = this;
    return tableData.filter(
      (data) =>
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
  edite(row: Item): void {
    console.info(row);
    this.tableData.splice(row.$index, 1, row);
  }
  onSwitch(type) {
    if (type) {
      this.dialogShow = "Edite";
    }
  }
}
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
<style lang="scss" scoped>
.table-list-subscribe .table-list-content {
  padding-bottom: 16px;
}
</style>
