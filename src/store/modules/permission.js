import { getMenus } from "@/api";
import storage from "store";

const permission = {
  state: {
    routerAdded: false,
  },
  mutations: {
    SET_ROUTER_FLAG: (state) => {
      state.routerAdded = true;
    },
    REMOVE_ROUTER_FLAG: (state) => {
      state.routerAdded = false;
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return getMenus().then(([, res]) => {
        storage.set("menus", res);
        commit("SET_ROUTER_FLAG");
        return res;
      });
    },
  },
};

export default permission;
