import Header from "../../../components/Header";
import Footer from "../../../components/Footers";
import Aside from "../../../components/Aside";
const getComponentFromProp = (instance, prop) => {
  const slots = instance.slots && instance.slots();
  return slots[prop] || instance.props[prop];
};
const PageWithHeader = {
  name: "PageWithHeader",
  props: ["menuData", "menuId"],
  render(h, context) {
    const footerRender = getComponentFromProp(context, "abc");
    context.$slots.default = context.children;
    console.info(context);
    console.info(context.menuData);

    return (
      <div>
        <div>header</div>
        <router-view />
      </div>
    );
  },
};

PageWithHeader.install = function(Vue) {
  Vue.component(PageWithHeader.name, PageWithHeader);
};

export default PageWithHeader;
