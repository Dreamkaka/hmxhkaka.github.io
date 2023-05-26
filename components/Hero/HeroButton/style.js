import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    stylish = _ref.stylish;
  return {
    button: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      border: none;\n\n      ", "\n      ", "\n\n      background-size: 200% 100%;\n\n      &:hover {\n        animation: none;\n      }\n    "])), stylish.heroButtonGradient, stylish.heroGradientFlow)
  };
});