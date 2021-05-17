import { renderBullet, renderSaleChart } from "./chart";
export default {
  data() {
    return {
      activeName: "sale",
    };
  },
  mounted() {
    renderBullet("bulletPlot");
    renderSaleChart("sale-chart");
  },
  methods: {
    tabClick({ name }) {
      console.info(name);
    },
  },
};
