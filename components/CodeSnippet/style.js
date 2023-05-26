import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      cursor: pointer;\n      &:hover {\n        background: ", ";\n        border-radius: 4px;\n      }\n      pre {\n        background: none !important;\n        padding: 2px 8px !important;\n        margin: 0;\n      }\n      code[class*='language-'] {\n        background: none !important;\n      }\n    "])), token.colorFillSecondary);
});