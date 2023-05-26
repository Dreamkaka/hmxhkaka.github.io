import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    responsive = _ref.responsive,
    token = _ref.token;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    font-family: AliPuHui, ", ";\n    color: ", ";\n    font-size: 22px;\n    line-height: 1;\n    font-weight: 500;\n    text-decoration: none;\n\n    ", " {\n      font-size: 18px;\n    }\n\n    img {\n      margin-inline-end: 10px;\n    }\n  "])), token.fontFamily, token.colorText, responsive.mobile);
});