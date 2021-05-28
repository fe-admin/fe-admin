<template>
  <with-header>
    <template #content>
      最少选择一种用户角色类型
    </template>
    <el-checkbox-group
      :min="1"
      v-model="checkList"
      @change="handleCheckedChange"
    >
      <el-checkbox label="admin"></el-checkbox>
      <el-checkbox label="user"></el-checkbox>
    </el-checkbox-group>
    <el-button type="primary">切换</el-button>
  </with-header>
</template>

<script>
import router, { resetRouter } from "@/router";
import getAsyncRouter from "@/router/async-router";
import { addRoutes } from "@/utils";
import storage from "store";

export default {
  name: "SystemPage",
  data() {
    return {
      checkList: ["admin"],
    };
  },
  methods: {
    async handleCheckedChange(roles) {
      console.info(roles);
      storage.set("roles", roles);
      resetRouter();
      this.$store.dispatch("permission/GenerateRoutes", roles).then((res) => {
        router.addRoutes(getAsyncRouter(res));
      });
    },
  },
};
</script>
<style lang="scss" src="./style/index.scss" scoped></style>
