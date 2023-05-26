import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import { createStyles } from 'antd-style';
import { rgba } from 'polished';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    stylish = _ref.stylish,
    prefixCls = _ref.prefixCls,
    responsive = _ref.responsive,
    css = _ref.css;
  var fixHeight = 36;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      grid-area: toc;\n      position: sticky;\n      top: 100px;\n      width: ", "px;\n      margin-inline-end: 24px;\n      max-height: 80vh;\n      overflow: auto;\n      margin-top: 48px;\n      z-index: 10;\n      border-radius: 8px;\n\n      ", " {\n        z-index: 300;\n        top: ", "px;\n        margin-top: 0;\n        width: 100%;\n      }\n\n      overscroll-behavior: contain;\n      -webkit-overflow-scrolling: touch;\n\n      > h4 {\n        margin: 0 0 8px;\n        color: ", ";\n        font-size: 12px;\n        line-height: 1;\n      }\n    "])), token.tocWidth, responsive.mobile, token.headerHeight + 1, token.colorTextDescription),
    mobileCtn: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: sticky;\n      top: ", "px;\n\n      height: ", "px;\n      width: 100%;\n      z-index: 200;\n      background: transparent;\n      background: ", ";\n    "])), token.headerHeight + 1, fixHeight, rgba(token.colorBgContainer, 0.8)),
    expand: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      backdrop-filter: blur(6px);\n      border-radius: 0;\n      border-bottom: 1px solid ", ";\n\n      box-shadow: ", ";\n      width: 100%;\n      z-index: 201;\n      background: ", ";\n\n      .", "-collapse-header {\n        padding: 8px 16px !important;\n      }\n    "])), token.colorSplit, token.boxShadowSecondary, rgba(token.colorBgContainer, 0.8), prefixCls),
    anchor: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      ", "\n    "])), stylish.blur)
  };
});