<template>
  <with-header>
    <template #content>
      高级表单常见于一次性输入和提交大批量数据的场景。
    </template>
    <div class="form-container">
      <el-form
        :inline="true"
        :model="formData"
        class="demo-form-inline"
        label-width="180px"
      >
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>账号/主索引设置</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >保存</el-button
            >
          </div>

          <el-form-item label="用户管理员账号：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="随访模块高级管理员账号：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="主索引自动合并分值：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
        </el-card>
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>时效设置</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >保存</el-button
            >
          </div>

          <el-form-item label="病例撤回时效：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="上报时效提醒日期：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="未上报统计日期：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="全国未上报统计日期：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="未完成上报提醒日期：">
            <el-input v-model="formData.user" placeholder=""></el-input>
          </el-form-item>
        </el-card>
        <div class="form-footer">
          <el-button>取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-form>
    </div>
  </with-header>
</template>

<script lang="ts">
import { Component, Ref, Mixins } from "vue-property-decorator";
import { getMessageList } from "@/api";
import { sleep } from "@/utils";
import PageMixin from "@/mixins/page";
import TableAlert from "@/components/TableAlert";
import { ElTable } from "element-ui/types/table";
import { MsgItem, MsgList } from "@/types/message";
import { paginationType, getPageParamsType } from "@/types/element";
import FePage from "@/components/Pagination";

@Component({
  components: { TableAlert, FePage },
})
export default class MessageList extends Mixins(PageMixin) {
  pagination!: paginationType;
  getPageParams!: getPageParamsType;
  search = "";
  loading = false;
  selectNum = 0;
  type = 0;
  unread = 0;
  readType = 0;
  formData = {};
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
    page?: undefined | Record<string, unknown>
  ): Promise<unknown> {
    this.loading = true;
    const { type, readType } = this;
    const defaultParams = {
      type,
      readType,
    };
    const params = this.getPageParams(defaultParams, page);
    const [err, res] = await getMessageList(params);
    if (!err && res) {
      await sleep(1000);
      this.tableData = res.data;
      this.unread = res.unread;
      if (this.pagination) this.pagination.total = res.total;
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
