import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { createGlobalStyle } from 'antd-style';
export var GlobalStyle = createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: ", ";\n  }\n\n  @font-face {\n    font-family: AliPuHui;\n    font-weight: normal;\n    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),\n    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),\n    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: AliPuHui;\n    font-weight: bold;\n    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),\n    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');\n    font-display: swap;\n  }\n\n  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n    margin-right: 4px;\n    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272\n\n    &-thumb {\n      background-color: ", "; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272\n      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84\n    }\n\n    &-corner {\n      display: none;\n    }\n  }\n"])), function (p) {
  return p.theme.colorBgLayout;
}, function (_ref) {
  var theme = _ref.theme;
  return theme.colorFill;
});