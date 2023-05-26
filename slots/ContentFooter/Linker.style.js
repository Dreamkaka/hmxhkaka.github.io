import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    css = _ref.css;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: ", ";\n    padding: 16px 24px;\n    border-radius: 8px;\n    cursor: pointer;\n\n    min-width: 250px;\n    &:hover {\n      background: ", ";\n    }\n  "])), token.colorBgContainer, token.colorFillTertiary),
    nav: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 12px;\n  "])), token.colorTextTertiary),
    title: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: 16px;\n  "]))),
    alignmentEnd: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n  "])))
  };
});