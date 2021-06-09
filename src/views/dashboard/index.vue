<template src="./tpl.html"></template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getCardList, getTabLine, getSaleList } from "@/api/dashboard";
import {
  renderBullet,
  renderArea,
  renderColumn,
  renderSaleChart,
  renderLine,
  renderTabPie,
} from "./js/chart";
import { tabComponent } from "@/types/element";
import { tabLineItem } from "@/types/dashboard";

@Component
export default class Dashboard extends Vue {
  picker = [];
  activeName = "sale";
  lineTabActiveName = "line0";
  cardList = [];
  tabLineData = [];
  saleListData = [];
  tabLineMap = new Map();

  async mounted(): Promise<unknown> {
    const [, cardList] = await getCardList();
    this.cardList = cardList;
    const [, res] = await getSaleList();
    this.saleListData = res;
    const [, data] = await getTabLine();
    this.tabLineData = data;
    await this.$nextTick();
    renderBullet("bulletPlot", parseInt(cardList[3].value));
    renderArea("areaChart");
    renderColumn("columChart");
    renderSaleChart("sale-chart");
    this.tabLineData.forEach((item: tabLineItem, i) => {
      renderTabPie(`linePie${i}`, item.value);
    });
    renderLine(`lineChart0`);
    this.tabLineMap.set("line0", true);
    return;
  }

  tabClick({ name }: tabComponent): string {
    return name;
  }

  lineTabClick({ name }: tabComponent): void {
    const { tabLineMap } = this;
    if (!tabLineMap.get(name)) {
      tabLineMap.set(name, true);
      renderLine(`lineChart${name.replace("line", "")}`);
    }
  }
}
</script>
<style src="./style/index.scss" lang="scss" scoped></style>
