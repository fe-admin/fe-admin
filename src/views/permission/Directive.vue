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
    <div :key="key">
      <div v-permission="['admin']">admin</div>
      <div v-permission="['user']">user</div>
    </div>
  </with-header>
</template>

<script>
import router, { resetRouter } from "@/router";
import getAsyncRouter from "@/router/async-router";
import { addRoutes } from "@/utils";

export default {
  name: "PermissionDirective",
  data() {
    return {
      key: 0,
      roles: ["admin", "user"],
      checkList: this.$store.getters.roles,
    };
  },
  methods: {
    async handleCheckedChange(roles) {
      console.info(roles);
      await this.$store.dispatch("user/SetRoles", roles);
      this.key++;
      resetRouter();
      const res = await this.$store.dispatch(
        "permission/GenerateRoutes",
        roles
      );
      router.addRoutes(getAsyncRouter(res));
    },
  },
};
</script>
<style lang="scss" src="./style/index.scss" scoped></style>
