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
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      console.info(11111111);

      return getMenus().then((res) => {
        console.info(res);
        storage.set("menus", res);
        commit("SET_ROUTER_FLAG");
        return res;
      });
    },
  },
};

export default permission;
