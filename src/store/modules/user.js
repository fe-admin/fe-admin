const userInfo = {
  namespaced: true,
  state: {
    accountName: "",
    roles: [],
  },
  mutations: {
    updateUserInfo: (state, payload) => {
      Object.assign(state, payload);
    },
    SET_USERINFO: (state, payload) => {
      Object.assign(state, payload);
    },
    SET_ROLES: (state, payload) => {
      state.roles = payload;
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      commit("SET_USERINFO", userInfo);
    },
    Logout() {},
    SetRoles({ commit }, roles) {
      commit("SET_ROLES", roles);
    },
  },
};

export default userInfo;
