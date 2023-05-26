import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref, prefixCls) {
  var css = _ref.css,
    stylish = _ref.stylish,
    cx = _ref.cx,
    token = _ref.token;
  return {
    container: cx(prefixCls, css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      background: ", ";\n      font-size: ", ";\n      border: 1px solid ", ";\n      box-shadow: ", ";\n      border-radius: 8px;\n      box-sizing: border-box;\n      overflow-y: auto;\n      overscroll-behavior: contain;\n      scrollbar-width: none;\n      padding: 5px;\n      outline: 0;\n      user-select: none;\n      width: 160px;\n\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    "])), token.colorBgElevated, token.fontSize, token.colorBorder, token.boxShadowSecondary)),
    button: cx("".concat(prefixCls, "-button"), css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      all: unset;\n      font-size: ", "px;\n      padding: 8px;\n      line-height: 0;\n      background: ", ";\n      color: ", ";\n      border-radius: ", "px;\n      cursor: default;\n      user-select: none;\n      border: 1px solid ", ";\n      -webkit-tap-highlight-color: transparent;\n\n      ", "\n\n      &:focus-visible {\n        border-color: ", ";\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "])), token.fontSize, token.colorBgContainer, token.colorTextSecondary, token.borderRadius, token.colorBorder, stylish.buttonDefaultHover, token.colorPrimary, token.colorPrimaryBg))
  };
});