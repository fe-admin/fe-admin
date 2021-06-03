<template>
  <with-header>
    <template #content>
      最少选择一种用户角色类型
    </template>
    <div class="directive">
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
        当前按钮角色包含[admin]下显示：<el-tag
          type="success"
          v-permission="['admin']"
          >admin</el-tag
        ><br /><br />
        当前按钮角色包含[user]</el-tag>下显示：<el-tag
          type="danger"
          v-permission="['user']"
          >user</el-tag
        ><br /><br />
        当前按钮角色包含[admin, user]</el-tag>下显示：<el-tag
          type="success"
          v-permission="['admin', 'user']"
          >admin</el-tag
        ><el-tag type="danger" v-permission="['admin', 'user']">user</el-tag>
      </div>
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
      await this.$store.dispatch("user/SetRoles", roles);
      this.key++;
      resetRouter();
      const res = await this.$store.dispatch(
        "permission/GenerateRoutes",
        roles
      );
      addRoutes(router, getAsyncRouter(res));
    },
  },
};
</script>
<style lang="scss" src="./style/index.scss" scoped></style>
