<template>
  <a :class="collapseCls" @click="onChange"
    >{{ collapsed ? "收起" : "展开"
    }}<i class="el-icon-arrow-down el-icon--right"></i
  ></a>
</template>
<script>
import { debounce } from "@/utils";

export default {
  name: "CollapseButton",
  props: ["collapsed", "onChange"],
  data() {
    return {};
  },
  computed: {
    collapseCls() {
      return this.collapsed
        ? "collapse-button collapse-button-ed"
        : "collapse-button";
    },
  },
  mounted() {
    this.onChange = debounce(this.onChange, 150, { leading: true });
  },
};
</script>
<style lang="scss" scoped>
.el-icon-arrow-down {
  transition: all 0.3s ease 0s;
  transform: rotate(0.5turn);
}
.collapse-button-ed {
  .el-icon-arrow-down {
    transition: all 0.3s ease 0s;
    transform: rotate(0turn);
  }
}
</style>
