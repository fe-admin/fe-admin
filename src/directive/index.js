import store from "@/store";
function checkPermission(el, value) {
  const { roles } = store.getters;
  if (value && Array.isArray(value) && value.length) {
    const hasPermission = roles.some((role) => {
      return value.includes(role);
    });
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`);
  }
}

const directive = {
  name: "permission",
  hooks: {
    inserted(el, { value }) {
      return checkPermission(el, value);
    },
    updated(el, { value }) {
      console.log("updated");
      return checkPermission(el, value);
    },
  },
};

const install = function(Vue) {
  Vue.directive(directive.name, directive.hooks);
};

directive.install = install;

export default directive;
