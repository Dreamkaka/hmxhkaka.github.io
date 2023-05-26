import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    css = _ref.css,
    cx = _ref.cx,
    prefixCls = _ref.prefixCls;
  var prefix = "".concat(prefixCls, "-highlighter");
  var buttonHoverCls = "".concat(prefix, "-hover-btn");
  var langHoverCls = "".concat(prefix, "-hover-lang");
  return {
    container: cx(prefix, css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: relative;\n\n        pre {\n          margin: 0 !important;\n        }\n\n        &:hover {\n          .", " {\n            opacity: 1;\n          }\n\n          .", " {\n            opacity: 1;\n          }\n        }\n      "])), buttonHoverCls, langHoverCls)),
    withBackground: cx("".concat(prefix, "-background"), css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        pre {\n          background: ", " !important;\n          border-radius: 8px;\n          padding: 12px !important;\n        }\n      "])), token.colorFillTertiary)),
    button: cx(buttonHoverCls, css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        opacity: 0;\n        position: absolute;\n        right: 8px;\n        top: 8px;\n        z-index: 50;\n      "])))),
    lang: cx(langHoverCls, css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        color: ", ";\n        opacity: 0;\n        position: absolute;\n        right: 8px;\n        bottom: 8px;\n        z-index: 50;\n        transition: opacity 0.1s;\n      "])), token.colorTextPlaceholder))
  };
});