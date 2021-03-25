export default {
  isCollapse: (state) => state.isCollapse,
  // store: (state) => state,
  addRouters: (state) => state.permission.addRouters,
  routerAdded: (state) => state.permission.routerAdded,
  accountName: (state) => state.user.accountName,
  menuId: (state) => state.menuId,
};
