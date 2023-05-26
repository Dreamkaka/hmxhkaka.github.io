import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    prefixCls = _ref.prefixCls,
    css = _ref.css;
  var prefix = ".".concat(prefixCls, "-tabs");
  var marginBlock = 8;
  return {
    cls: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "-tab + ", "-tab {\n        margin: 8px 4px !important;\n        margin-block: ", "px;\n        padding: 0 12px !important;\n      }\n\n      ", "-tab {\n        color: ", ";\n        transition: background-color 150ms ease-out;\n\n        &:first-child {\n          margin-inline: 0 4px;\n          margin-block: ", "px;\n          padding: 4px 12px !important;\n        }\n\n        &:hover {\n          color: ", " !important;\n          background: ", ";\n          border-radius: 6px;\n        }\n      }\n    "])), prefix, prefix, marginBlock, prefix, token.colorTextSecondary, marginBlock, token.colorText, token.colorFillTertiary)
  };
});