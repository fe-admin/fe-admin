<template>
  <with-header>
    <div style="width:1000px;height:500px;background:#fff;">
      <el-radio-group v-model.number="radio" @change="change">
        <el-radio-button label="1">矩形</el-radio-button>
        <el-radio-button label="2">点</el-radio-button>
        <el-radio-button label="3">多边形</el-radio-button>
        <el-radio-button label="0">选择</el-radio-button>
      </el-radio-group>
      <canvas id="myCanvas" style="width:1000px;height:height:500px;"></canvas>
    </div>
  </with-header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import paperState from "./paper";

@Component
export default class PaperClass extends Vue {
  radio = 1;
  mounted(): void {
      const paperInstance = new paperState();
      this.paperInstance = paperInstance;
  }
  change(v: number): void {
      this.paperInstance.setState(v);
  }
}
</script>
