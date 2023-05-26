import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    prefixCls = _ref.prefixCls,
    responsive = _ref.responsive,
    css = _ref.css,
    cx = _ref.cx;
  var prefix = "".concat(prefixCls, "-features");
  return {
    container: cx(prefix, css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        max-width: ", "px;\n\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-auto-flow: row dense;\n        grid-auto-rows: 24px;\n        gap: 16px;\n\n        ", "\n      "])), token.contentMaxWidth, responsive({
      mobile: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            flex-direction: column;\n            display: flex;\n          "]))),
      laptop: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
    })))
  };
});