export default {
  clear(context) {
    context.commit("clear");
  },
  update(context, payload) {
    context.commit("update", payload);
  },
  toggleCollapse({ commit }, payload) {
    commit("COLLAPSE", payload);
  },
  updateMenuId({ commit }, payload) {
    commit("UPDATE_MENUID", payload);
  },
};
