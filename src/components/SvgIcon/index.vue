<template>
  <svg aria-hidden="true" :class="className ? className : 'icon'">
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script>
const SvgIcon = {
  name: "SvgIcon",
  props: ["className", "iconName"],
  data() {
    return {};
  },
};
SvgIcon.install = function(Vue) {
  Vue.component(SvgIcon.name, SvgIcon);
};
export default SvgIcon;
</script>
