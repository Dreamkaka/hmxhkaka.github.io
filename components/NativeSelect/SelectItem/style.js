import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref, prefixCls) {
  var css = _ref.css,
    cx = _ref.cx,
    token = _ref.token;
  return {
    item: cx("".concat(prefixCls, "-item"), css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      display: block;\n      all: unset;\n      width: 100%;\n      padding: 12px 10px;\n      border-radius: 5px;\n      box-sizing: inherit;\n      user-select: none;\n      line-height: 1;\n      scroll-margin: 50px;\n\n      font-weight: normal;\n      font-family: ", ";\n      color: ", ";\n      background: transparent;\n      &:hover {\n        background: ", ";\n      }\n    "])), token.fontFamily, token.colorText, token.colorFillTertiary)),
    selected: cx("".concat(prefixCls, "-item-selected"), css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      color: ", ";\n      background: ", ";\n      font-weight: bold;\n      &:hover {\n        color: ", ";\n        background: ", ";\n      }\n    "])), token.colorPrimaryText, token.colorPrimaryBg, token.colorPrimaryTextHover, token.colorPrimaryBgHover)),
    active: cx("".concat(prefixCls, "-item-active"), css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background: ", ";\n    "])), token.colorFillTertiary))
  };
});