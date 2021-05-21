import { getTabLine, getSaleList } from "@/api/dashboard";
import {
  renderBullet,
  renderArea,
  renderColumn,
  renderSaleChart,
  renderLine,
  renderTabPie,
} from "./chart";

export default {
  data() {
    return {
      activeName: "sale",
      lineTabActiveName: "line0",
      tabLineData: [],
      saleListData: [],
      tabLineMap: new Map(),
    };
  },
  async mounted() {
    renderBullet("bulletPlot");
    renderArea("areaChart");
    renderColumn("columChart");
    renderSaleChart("sale-chart");
    const [, res] = await getSaleList();
    this.saleListData = res;
    const [, data] = await getTabLine();
    this.tabLineData = data;
    await this.$nextTick();
    this.tabLineData.forEach((item, i) => {
      renderTabPie(`linePie${i}`, item.value);
    });
    renderLine(`lineChart0`);
    this.tabLineMap.set("line0", true);
  },

  methods: {
    tabClick({ name }) {
      console.info(name);
    },
    lineTabClick({ name }) {
      const { tabLineMap } = this;
      if (!tabLineMap.get(name)) {
        tabLineMap.set(name, true);
        renderLine(`lineChart${name.replace("line", "")}`);
      }
    },
  },
};
