<template>
  <fe-result
    status="success"
    :title="result.title"
    :sub-title="result.description"
  >
    <template #extra>
      <el-button type="primary">{{ "result.success.btn-return" }}</el-button>
      <el-button style="margin-left: 8px">{{
        "result.success.btn-project"
      }}</el-button>
      <a-button style="margin-left: 8px">{{
        "result.success.btn-print"
      }}</a-button>
    </template>
    <div class="content">
      <div
        style="font-size: 16px; color: rgba(0, 0, 0, 0.85); font-weight: 500; margin-bottom: 20px;"
      >
        {{ "result.success.operate-title" }}
      </div>
      <a-row style="margin-bottom: 16px">
        <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
          <span style="color: rgba(0, 0, 0, 0.85)"
            >{{ "result.success.operate-id" }}：</span
          >
          20180724089
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
          <span style="color: rgba(0, 0, 0, 0.85)"
            >{{ "result.success.principal" }}：</span
          >
          曲丽丽是谁？
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
          <span style="color: rgba(0, 0, 0, 0.85)"
            >{{ "result.success.operate-time" }}：</span
          >
          2016-12-12 ~ 2017-12-12
        </a-col>
      </a-row>
      <a-steps
        :current="1"
        :direction="
          (isMobile && directionType.vertical) || directionType.horizontal
        "
        progressDot
      >
        <a-step :title="'result.success.step1-title'">
          <span style="font-size: 14px" slot="title">{{
            "result.success.step1-title"
          }}</span>
          <template slot="description">
            <div
              style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;"
              slot="description"
            >
              <div style="margin: 8px 0 4px">
                曲丽丽
                <a-icon style="margin-left: 8px" type="dingding-o" />
              </div>
              <div>2016-12-12 12:32</div>
            </div>
          </template>
        </a-step>
        <a-step :title="'result.success.step2-title'">
          <span style="font-size: 14px" slot="title">{{
            "result.success.step2-title"
          }}</span>
          <template slot="description">
            <div
              style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;"
              slot="description"
            >
              <div style="margin: 8px 0 4px">
                周毛毛
                <a-icon
                  style="margin-left: 8px; color: #00A0E9"
                  type="dingding-o"
                />
              </div>
              <div><a href="">催一下</a></div>
            </div>
          </template>
        </a-step>
        <a-step :title="'result.success.step3-title'">
          <span style="font-size: 14px" slot="title">{{
            "result.success.step3-title"
          }}</span>
        </a-step>
        <a-step :title="'result.success.step4-title'">
          <span style="font-size: 14px" slot="title">{{
            "result.success.step4-title"
          }}</span>
        </a-step>
      </a-steps>
    </div>
  </fe-result>
</template>

<script>
// import { baseMixin } from "@/store/app-mixin";

const directionType = {
  horizontal: "horizontal",
  vertical: "vertical",
};

export default {
  name: "Success",
  // mixins: [baseMixin],
  data() {
    this.directionType = directionType;
    return {
      // title: this.$t('result.success.title'),
      // description: this.$t('result.success.description')
    };
  },
  computed: {
    result() {
      return {
        title: "result.success.title",
        description: "result.success.description",
      };
    },
  },
};
</script>
