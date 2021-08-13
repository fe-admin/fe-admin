<template src="./tpl.html"> </template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FormBase extends Vue {
  loading = false;
  editeRowIndex = -1;
  editeRow = {};
  formData = {
    title: "",
    date: "",
    desc: "",
    radio: 0,
    weight: NaN,
    standard: "",
    invitation: "",
    user: "",
    area: null,
  };
}
</script>
<style lang="scss" src="./style.scss" scoped></style>
