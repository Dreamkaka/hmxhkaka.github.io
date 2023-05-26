import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token,
    cx = _ref.cx,
    prefixCls = _ref.prefixCls;
  var prefix = "".concat(prefixCls, "-highlighter");
  return {
    shiki: cx("".concat(prefix, "-shiki"), css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .shiki {\n          overflow-x: scroll;\n\n          .line {\n            font-family: ", ";\n          }\n        }\n      "])), token.fontFamilyHighlighter)),
    prism: cx("".concat(prefix, "-prism"), css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        code[class*='language-'] {\n          background: none !important;\n        }\n      "])))),
    loading: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      position: absolute;\n      top: 8px;\n      right: 12px;\n      color: ", ";\n    "])), token.colorTextTertiary)
  };
});