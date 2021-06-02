<template>
  <div class="dashboard">
    <div class="dashboard-card">
      <div class="dashboard-card-item" v-for="card in cardList" :key="card.id">
        <div class="title">
          <span class="txt">{{ card.title }}</span>
          <el-tooltip effect="dark" content="指标说明" placement="top">
            <i class="el-icon-warning-outline"></i
          ></el-tooltip>
        </div>
        <div class="dashboard-card-content">
          <div class="num">
            {{ card.value }}
          </div>
          <div class="chart" v-if="card.element" :id="card.element"></div>
          <div class="chart" v-else>
            <span class="tread-item"
              >周同比<span class="trend-text">{{ card.percentage[0] }}</span
              ><i class="el-icon-caret-bottom"></i></span
            >日同比<span class="trend-text">{{ card.percentage[1] }}</span
            ><i class="el-icon-caret-top"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-list">
      <el-date-picker
        v-model="picker"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      >
      </el-date-picker>
      <el-tabs v-model="activeName" @tab-click="tabClick">
        <el-tab-pane label="销售量" name="sale">
          <div class="chart-wrap">
            <h5 class="tit">销售趋势</h5>
            <div class="chart" id="sale-chart"></div>
          </div>
          <div class="top-list">
            <h5 class="tit">门店销售额排名</h5>
            <ul class="top-list-ul">
              <li
                class="item"
                v-for="(item, index) in saleListData"
                :key="item.id"
              >
                <span :class="index < 3 ? `style` : 'style normal'">{{
                  index + 1
                }}</span
                >{{ item.title }}<span class="num">{{ item.value }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="visits">
          <div class="chart-wrap"></div>
          <div class="top-list"></div
        ></el-tab-pane>
      </el-tabs>
    </div>

    <div class="tab-line">
      <el-tabs v-model="lineTabActiveName" @tab-click="lineTabClick">
        <el-tab-pane
          v-for="(item, i) in tabLineData"
          :key="item.id"
          :name="`line${i}`"
        >
          <div class="line-label" slot="label">
            <div class="tit">{{ item.title }}</div>
            <div class="label-wrap">
              <div class="label-bd">
                <span class="name">{{ item.desc }}</span>
                <span class="num">{{ item.value }}%</span>
              </div>
              <div class="chart" :id="`linePie${i}`"></div>
            </div>
          </div>
          <div class="chart-wrap">
            <div class="chart" :id="`lineChart${i}`"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import dashboard from "./js";
export default dashboard;
</script>
<style src="./style/index.scss" lang="scss" scoped></style>
