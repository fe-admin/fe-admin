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
      <el-checkbox-button v-for="role in roles" :label="role" :key="role">{{
        role
      }}</el-checkbox-button>
    </el-checkbox-group>
    <h2>当前用户角色为：{{ checkList }}</h2>
  </with-header>
</template>

<script>
import router, { resetRouter } from "@/router";
import getAsyncRouter from "@/router/async-router";
import { addRoutes } from "@/utils";
import storage from "store";

export default {
  name: "SystemDirective",
  data() {
    return {
      roles: ["admin", "user"],
      checkList: storage.get("roles"),
    };
  },
  methods: {
    async handleCheckedChange(roles) {
      storage.set("roles", roles);
      resetRouter();
      this.$store.dispatch("permission/GenerateRoutes", roles).then((res) => {
        router.addRoutes(getAsyncRouter(res));
        this.$nextTick().then(() => {
          roles.toString() === "admin" && this.$router.push("/system/page");
        });
      });
    },
  },
};
</script>
<style lang="scss" src="./style/index.scss" scoped></style>
