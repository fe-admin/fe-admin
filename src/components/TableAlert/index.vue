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
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class TableAlert extends Vue {
  @Prop(Number) readonly selectNum!: number;
  @Prop(Function) readonly clearSelection!: () => void;
}
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
