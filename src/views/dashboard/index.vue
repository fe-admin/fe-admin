<template>
  <with-header>
    <div class="dashboard">
      <el-row type="flex" class="dashboard-list" justify="space-between">
        <div class="dashboard-list-item">
          <div class="title">
            <span class="txt">总销售额</span
            ><i class="el-icon-warning-outline"></i>
          </div>
          <div class="dashboard-list-content">
            <div class="num">
              ¥ 126,560
            </div>
            <div class="chart">
              <span class="tread-item"
                >周同比<span class="trend-text">12%</span
                ><i class="el-icon-caret-bottom"></i></span
              >日同比<span class="trend-text">22%</span
              ><i class="el-icon-caret-top"></i>
            </div>
          </div>
        </div>
        <div class="dashboard-list-item">
          <div class="title">
            <span class="txt">访问量</span
            ><i class="el-icon-warning-outline"></i>
          </div>
          <div class="dashboard-list-content">
            <div class="num">
              126,560
            </div>
            <div class="chart" id="areaChart"></div>
          </div>
        </div>
        <div class="dashboard-list-item">
          <div class="title">
            <span class="txt">支付笔数</span
            ><i class="el-icon-warning-outline"></i>
          </div>
          <div class="dashboard-list-content">
            <div class="num">
              6,560
            </div>
            <div class="chart" id="columChart"></div>
          </div>
        </div>
        <div class="dashboard-list-item">
          <div class="title">
            <span class="txt">运营活动效果 </span
            ><i class="el-icon-warning-outline"></i>
          </div>
          <div class="dashboard-list-content">
            <div class="num">
              78%
            </div>
            <div class="chart" id="bulletPlot"></div>
          </div>
        </div>
      </el-row>
      <div class="tab-list">
        <el-date-picker
          v-model="value2"
          type="datetimerange"
          :picker-options="pickerOptions"
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
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
                </li>
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
                </li>
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
                </li>
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
                </li>
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
                </li>
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
                </li>
                <li class="item">
                  <span class="style">1</span>工专路 0 号店<span class="num"
                    >323,234</span
                  >
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
    </div>
  </with-header>
</template>
<script>
import dashboard from "./js";
export default dashboard;
</script>
<style src="./style/index.scss" lang="scss" scoped></style>
