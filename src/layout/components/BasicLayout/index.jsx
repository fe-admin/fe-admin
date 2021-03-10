import Header from "../../../components/Header";
import Footer from "../../../components/Footers";
import Aside from "../../../components/Aside";
import Collapse from "../../../components/Collapse";
import Breadcrumb from "../../../components/Breadcrumb";
const getComponentFromProp = (instance, prop) => {
  const slots = instance.slots && instance.slots();
  return slots[prop] || instance.props[prop];
};

const BasicLayout = {
  name: "BasicLayout",
  functional: true,
  render(h, context) {
    const logoRender = getComponentFromProp(context, "logo");
    const asideTitleRender = getComponentFromProp(context, "asideTitle");
    const footerRender = getComponentFromProp(context, "footer");
    const { isCollapse } = context.props;
    return (
      <el-container class={isCollapse ? "pro-layout-collapse" : "pro-layout"}>
        <el-header height="46px">
          <Header {...{ props: { ...context.props } }}>{logoRender}</Header>
        </el-header>
        <el-container>
          <el-aside class="el-aside-menu" width="200px">
            <Aside {...{ props: { ...context.props } }}>
              {asideTitleRender}
            </Aside>
            <Collapse isCollapse={isCollapse} />
          </el-aside>
          <el-container class="main-content">
            <el-main>
              <Breadcrumb {...{ props: { ...context.props } }}></Breadcrumb>
              <router-view />
            </el-main>
            <el-footer height="38px">
              <Footer>{footerRender}</Footer>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    );
  },
};

BasicLayout.install = function(Vue) {
  Vue.component(BasicLayout.name, BasicLayout);
};

export default BasicLayout;
