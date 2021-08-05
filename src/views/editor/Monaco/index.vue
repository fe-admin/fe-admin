<template>
  <with-header>
    <iframe class="editor" src="./editor.html"></iframe>
  </with-header>
</template>
<script>
export default {
  components: {},

  mounted() {},
  methods: {},
  beforeDestroy() {
    // try {
    // } catch (error) {}
  },
};
</script>
<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 550px;
  padding: 12px;
  border: none;
  background: #1f1f1f;
}
</style>
