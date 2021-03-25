/* eslint-disable */
const print = () => {
  // ASCII - ANSI Shadow
  let text = `
  ███████╗███████╗     █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
  ██╔════╝██╔════╝    ██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║
  █████╗  █████╗      ███████║██║  ██║██╔████╔██║██║██╔██╗ ██║
  ██╔══╝  ██╔══╝      ██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║
  ██║     ███████╗    ██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
  ╚═╝     ╚══════╝    ╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝
  Published information:
  version:${VERSION}
  commit: ${COMMITHASH}
  bransh: ${BRANCH}
  date: ${BUILD_DATE}`;
  console.log(`%c${text}`, "color: #fc4d50");
  console.log(
    "%c感谢使用 fe admin!",
    "color: #000; font-size: 14px;font-family: Hiragino Sans GB,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,Droid Sans Fallback,Source Sans,Wenquanyi Micro Hei,WenQuanYi Micro Hei Mono,WenQuanYi Zen Hei,Apple LiGothic Medium,SimHei,ST Heiti,WenQuanYi Zen Hei Sharp,sans-serif;"
  );
  console.log(
    "%cThanks for using fe admin!",
    "color: #fff; font-size: 14px; font-weight: 300; text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;"
  );
};
print();
