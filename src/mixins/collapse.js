import { mapGetters, mapActions } from "vuex";
import { ccollapse } from "../utils";
let collapseScope = () => {};

export default {
  computed: { ...mapGetters(["isCollapse"]) },
  created() {
    collapseScope = collapse.bind(this);
  },
  methods: {
    ...mapActions(["clear", "update"]),
    async setCollapse(payload) {

      collapseScope(payload);
    },
    collapseAnimate(payload) {
      collapseScope(payload);
      this.$emit("global:setCollapse");
    },
  },
};
