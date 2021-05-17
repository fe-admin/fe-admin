import {
  renderBullet,
  renderArea,
  renderColumn,
  renderSaleChart,
} from "./chart";
export default {
  data() {
    return {
      activeName: "sale",
    };
  },
  mounted() {
    renderBullet("bulletPlot");
    renderArea("areaChart");
    renderColumn("columChart");
    renderSaleChart("sale-chart");
  },
  methods: {
    tabClick({ name }) {
      console.info(name);
    },
  },
};
