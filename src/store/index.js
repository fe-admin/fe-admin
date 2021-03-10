import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import userInfo from "./modules/user";

Vue.use(Vuex);
const state = {
  notice: 0,
  isCollapse: false,
  layout: null,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: { userInfo },
});
