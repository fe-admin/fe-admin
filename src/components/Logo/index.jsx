const LogoRender = {
  name: "LogoRender",
  functional: true,
  render(h) {
    const dom = [<svg-icon iconName="fe-logo" />, <h1>Fe-Admin</h1>];
    return dom;
  },
};

export default LogoRender;
