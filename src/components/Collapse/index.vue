<template>
  <div class="collapse" @click="setCollapse({ isCollapse: !isCollapse })">
    <svg-icon
      className="collapse-icon"
      :iconName="isCollapse ? 'fe-menu-open' : 'fe-menu-close'"
    />
  </div>
</template>
<script>
import collapse from "../../mixins/collapse";

export default {
  mixins: [collapse],
  name: "Collapse",
  props: ["isCollapse"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.collapse {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  z-index: 9;
  border-top: solid 1px #f5f5f9;
  cursor: pointer;
  .collapse-icon {
    width: 18px;
    height: 18px;
    margin: 12px 0 0 20px;
    fill: #666666;
  }
}
</style>
