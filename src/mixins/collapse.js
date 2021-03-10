import { mapGetters, mapActions } from "vuex";
import { isQiankun, collapse } from "../util";
let collapseScope = () => {};

export default {
  computed: { ...mapGetters(["isCollapse"]) },
  created() {
    collapseScope = collapse.bind(this);
  },
  methods: {
    ...mapActions(["clear", "update"]),
    async setCollapse(payload) {
      // if (isQiankun()) {
      //   QianKun.emit("collapse", payload);
      // }
      collapseScope(payload);
      // this.collapseAnimate(payload);
    },
    collapseAnimate(payload) {
      collapseScope(payload);
      this.$emit("global:setCollapse");
    },
  },
};
