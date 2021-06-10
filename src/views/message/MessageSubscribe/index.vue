<template src="./tpl.html"> </template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getSubscribeList } from "@/api";
import { sleep } from "@/utils";

@Component
export default class MessageSubscribe extends Vue {
  isIndeterminate = {
    web: false,
    email: false,
    mobile: false,
  };
  // 全选动作
  checkAll = { web: false, email: false, mobile: false };
  search = "";
  loading = false;
  tableHead = [
    { name: "msgType", label: "消息类型" },
    { name: "web", label: "站内信" },
    { name: "email", label: "邮件" },
    { name: "mobile", label: "短信" },
    { name: "receiveUser", label: "接收人" },
  ];
  tableData = [];
  columWidth = [400];

  get filterData() {
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
      this.reset(Object.keys(this.isIndeterminate));
      this.loading = false;
    }
    return;
  }
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
  }
  setCheck(numMap, type) {
    if (numMap.total === numMap[type]) {
      this.isIndeterminate[type] = false;
      this.checkAll[type] = true;
    } else {
      this.isIndeterminate[type] = true;
    }
  }
  handleCheckAllChange(type, val) {
    this.isIndeterminate[type] = false;
    this.tableData.forEach((item) => {
      if (item.children) {
        item.children.forEach((row) => (row[type] = val));
      }
    });
  }
  handleCheckChange(type, val) {
    this.reset(type);
  }
}
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
<style lang="scss" scoped>
.table-list-subscribe .table-list-content {
  padding-bottom: 16px;
}
</style>
