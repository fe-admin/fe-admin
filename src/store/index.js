import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import user from "./modules/user";
import permission from "./modules/permission";

Vue.use(Vuex);
const state = {
    menuId: "0",
    isCollapse: false,
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: { user, permission },
    plugins: [createPersistedState()],
});
