import { removeToken } from "@/utils/auth";
const userInfo = {
  namespaced: true,
  state: {
    accountName: "",
    roles: [],
  },
  mutations: {
    SET_USERINFO: (state, payload) => {
      Object.assign(state, payload);
    },
    SET_ROLES: (state, payload) => {
      state.roles = payload;
    },
    LOG_OUT: (state) => {
      // state.
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      commit("SET_USERINFO", userInfo);
    },
    SetRoles({ commit }, roles) {
      commit("SET_ROLES", roles);
    },
    Logout({ commit }) {
      removeToken();
      commit("LOG_OUT");
    },
  },
};

export default userInfo;
