import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import { createStyles } from 'antd-style';
export var useStyle = createStyles(function (_ref) {
  var css = _ref.css,
    responsive = _ref.responsive,
    token = _ref.token;
  return {
    header: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    top: 0;\n    position: sticky;\n    background-color: transparent;\n    backdrop-filter: blur(6px);\n    z-index: ", ";\n    border-bottom: 1px solid ", ";\n\n    grid-area: head;\n    align-self: stretch;\n\n    ", " {\n      background: ", ";\n    }\n  "])), token.zIndexPopupBase - 50, token.colorSplit, responsive.mobile, token.colorBgContainer),
    content: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0 24px;\n    height: 64px;\n\n    ", " {\n      padding: 0 12px;\n    }\n  "])), responsive.mobile),
    left: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""]))),
    right: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    justify-content: space-between;\n\n    &-aside {\n      display: flex;\n      align-items: center;\n\n      ", " {\n        margin: 8px 16px;\n        padding-top: 24px;\n        justify-content: center;\n        border-top: 1px solid ", ";\n      }\n    }\n  "])), responsive.mobile, token.colorBorder)
  };
});