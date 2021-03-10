const MenuRender = {
  name: "MenuRender",
  functional: true,
  render(h, context) {
    const {
      defaultActive,
      defaultOpeneds,
      uniqueOpened,
      collapse,
      collapseTransition,
      menus,
      redirect,
    } = context.props;
    return (
      <el-menu
        default-active={defaultActive}
        default-openeds={defaultOpeneds}
        unique-opened={uniqueOpened}
        collapse={collapse}
        collapse-transition={collapseTransition}
      >
        {headerRender(h, { menus, redirect })}
      </el-menu>
    );
  },
};

const headerRender = (h, { menus, redirect }) => {
  const domArr = [];
  if (!Array.isArray(menus)) return domArr;
  menus.forEach((item) => {
    if (item.children && item.children.length) {
      domArr.push(
        <el-submenu index={item.id}>
          <template slot="title">
            {item.icon ? <svg-icon iconName={item.icon} /> : null}
            {item.title}
            <span slot="title" class="hide">
              <span class="txt">{item.title}</span>
            </span>
          </template>
          {headerRender(h, { menus: item.children, redirect })}
        </el-submenu>
      );
    } else {
      domArr.push(
        <el-menu-item
          index={item.id}
          class="item-children"
          vOn:click={() => redirect(item)}
        >
          {item.icon ? <svg-icon iconName={item.icon} /> : null}
          <span slot="title" class="hide">
            <span class="txt">{item.title}</span>
          </span>
          {item.title}
        </el-menu-item>
      );
    }
  });
  return domArr;
};

export default MenuRender;
