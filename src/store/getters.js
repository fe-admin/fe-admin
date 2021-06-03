export default {
  isCollapse: (state) => state.isCollapse,
  routers: (state) => state.permission.routers,
  accountName: (state) => state.user.accountName,
  roles: (state) => state.user.roles,
  menuId: (state) => state.menuId,
};
