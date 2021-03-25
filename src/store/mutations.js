export default {
  clear(state) {
    state.userInfo = {};
  },
  update(state, payload) {
    Object.assign(state, payload);
  },
  COLLAPSE(state, payload) {
    state.isCollapse = payload;
  },
  UPDATE_MENUID(state, payload) {
    state.menuId = payload;
  },
};
