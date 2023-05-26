import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token,
    r = _ref.responsive,
    stylish = _ref.stylish;
  return {
    title: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-family: monospace;\n    ", " {\n      margin-block: 0;\n      font-size: 32px !important;\n    }\n  "])), r.mobile),
    label: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 80px;\n  "]))),
    desc: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), token.fontSizeLG, token.lineHeightLG),
    text: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n  "])), stylish.clickableText),
    meta: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])))
  };
});