import { getMenus } from "@/api";

function hasPermission(roles, route) {
    if (route.meta && route.meta.permission) {
        return roles.some((role) => route.meta.permission.includes(role));
    } 
    return true;
  
}

export function filterAsyncRoutes(routes, roles) {
    const res = [];
    routes.forEach((route) => {
        const tmp = { ...route };
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            res.push(tmp);
        }
    });

    return res;
}

const permission = {
    namespaced: true,
    state: {
        routers: [],
    },
    mutations: {
        SET_ROUTES: (state, routers) => {
            state.routers = routers;
        },
        REMOVE_ROUTES: (state) => {
            state.routers = [];
        },
    },
    actions: {
        GenerateRoutes({ commit }, roles) {
            return getMenus().then(([, res]) => {
                const accessedRoutes = filterAsyncRoutes(res, roles);
                commit("SET_ROUTES", accessedRoutes);
                return accessedRoutes;
            });
        },
        RemoveRoutes({ commit }) {
            commit("REMOVE_ROUTES");
        },
    },
};

export default permission;
