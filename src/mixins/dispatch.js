import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["update"]),
    async dispatch(type, payload) {
      this.update(payload);
    },
  },
};
