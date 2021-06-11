<template>
  <with-header>
    <template #content>
      最少选择一种用户角色类型
    </template>
    <div class="directive">
      <el-checkbox-group
        min="1"
        v-model="checkList"
        @change="handleCheckedChange"
      >
        <el-checkbox-button v-for="role in roles" :label="role" :key="role">{{
          role
        }}</el-checkbox-button>
      </el-checkbox-group>
      <h2>当前用户角色为：{{ checkList }}</h2>
    </div>
  </with-header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router, { resetRouter } from "@/router";
import getAsyncRouter from "@/router/async-router";
import { addRoutes } from "@/utils";

@Component
export default class PermissionPage extends Vue {
  roles: [string, string] = ["admin", "user"];
  checkList: [] = this.$store.getters.roles;

  async handleCheckedChange(roles: []): Promise<unknown> {
      await this.$store.dispatch("user/SetRoles", roles);
      resetRouter();
      const res = await this.$store.dispatch("permission/GenerateRoutes", roles);
      return addRoutes(router, getAsyncRouter(res));
  }
}
</script>
<style lang="scss" src="../style/index.scss" scoped></style>
