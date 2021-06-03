<template>
  <div class="table-alert">
    <div class="table-alert-message">
      <div class="table-alert-info">
        <div class="table-alert-info-content">已选择 {{ selectNum }} 项</div>
        <div class="table-alert-info-option">
          <a @click="clearSelection">取消选择</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/utils";

export default {
  name: "TableAlert",
  props: ["selectNum", "clearSelection"],
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.table-alert {
  margin-bottom: 16px;
  &-message {
    padding: 12px 24px;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }
  &-info {
    display: flex;
    align-items: center;
    &-content {
      flex: 1;
    }
  }
}
</style>
