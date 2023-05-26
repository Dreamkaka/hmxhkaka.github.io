import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref, _ref2) {
  var css = _ref.css,
    cx = _ref.cx,
    responsive = _ref.responsive,
    token = _ref.token;
  var hideToc = _ref2.hideToc,
    hideSidebar = _ref2.hideSidebar;
  return {
    layout: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      background-color: ", ";\n      background-image: linear-gradient(\n        180deg,\n        ", " 0%,\n        rgba(255, 255, 255, 0) 10%\n      );\n      display: grid;\n      grid-template-columns: ", "px 1fr ", ";\n      grid-template-rows: ", "px auto 1fr auto;\n      grid-template-areas:\n        'head head head'\n        '", " title ", "'\n        '", " main ", "'\n        '", " footer footer';\n      min-height: 100vh;\n\n      ", " {\n        display: flex;\n        flex-direction: column;\n      }\n    "])), token.colorBgLayout, token.colorBgContainer, token.sidebarWidth, hideToc ? '' : "".concat(token.tocWidth + 24, "px"), token.headerHeight, hideSidebar ? 'title' : 'sidebar', hideToc ? 'title' : '.', hideSidebar ? 'main' : 'sidebar', hideToc ? 'main' : 'toc', hideSidebar ? 'footer' : 'sidebar', responsive.mobile),
    toc: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: sticky;\n      top: 100px;\n      width: ", "px;\n      margin-inline-end: 24px;\n      max-height: 80vh;\n      overflow: auto;\n      margin-top: 48px;\n\n      ", " {\n        z-index: 300;\n        top: ", "px;\n        margin-top: 0;\n        width: 100%;\n      }\n\n      overscroll-behavior: contain;\n      -webkit-overflow-scrolling: touch;\n\n      > h4 {\n        margin: 0 0 8px;\n        color: ", ";\n        font-size: 12px;\n        line-height: 1;\n      }\n    "])), token.tocWidth, responsive.mobile, token.headerHeight + 1, token.colorTextDescription),
    content: cx(css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        max-width: 960px;\n        width: 100%;\n        margin: 0 24px;\n      "]))), css(responsive({
      desktop: {
        maxWidth: token.contentMaxWidth
      },
      mobile: {
        margin: 0
      }
    })))
  };
});