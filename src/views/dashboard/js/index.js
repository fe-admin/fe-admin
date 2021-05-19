import {
  renderBullet,
  renderArea,
  renderColumn,
  renderSaleChart,
  renderLine,
} from "./chart";
export default {
  data() {
    return {
      activeName: "sale",
      lineTabActiveName: "line1",
    };
  },
  mounted() {
    renderBullet("bulletPlot");
    renderArea("areaChart");
    renderColumn("columChart");
    renderSaleChart("sale-chart");
    renderLine("line-chart");
  },
  methods: {
    tabClick({ name }) {
      console.info(name);
    },
    lineTabClick({ name }) {
      console.info(name);
    },
  },
};
