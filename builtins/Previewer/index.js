import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { createStyles } from 'antd-style';
import Previewer from 'dumi/theme-default/builtins/Previewer';
import { rgba } from 'polished';
import { useMemo } from 'react';
import DemoProvider from "../../components/DemoProvider";
import { IntersectionLoad } from "../../components/LazyLoad";
import { jsx as _jsx } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token,
    prefixCls = _ref.prefixCls;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .dumi-default-previewer {\n        border-color: ", ";\n        display: flex;\n        flex-direction: column;\n\n        &-demo {\n          flex: 1;\n\n          &[data-iframe]::before {\n            background: ", ";\n          }\n        }\n\n        &-meta {\n          border-color: ", ";\n          flex: 1;\n\n          .", "-highlighter {\n            pre {\n              border-radius: 0 !important;\n            }\n          }\n        }\n\n        &-actions:not(:last-child) {\n          border-color: ", ";\n        }\n\n        &-desc {\n          .markdown {\n            border-color: ", ";\n          }\n\n          h5 {\n            background: linear-gradient(\n              to top,\n              ", ",\n              ", " 50%,\n              ", " 100%\n            );\n\n            a {\n              color: ", ";\n            }\n          }\n        }\n\n        &-tabs::after {\n          border-color: ", ";\n        }\n      }\n\n      .dumi-default-tabs-tab {\n        &-btn {\n          color: ", ";\n        }\n\n        &-active {\n          .dumi-default-tabs-tab-btn {\n            color: ", ";\n          }\n        }\n      }\n    "])), token.colorBorderSecondary, token.colorFillContent, token.colorBorderSecondary, prefixCls, token.colorBorderSecondary, token.colorBorderSecondary, token.colorBgContainer, rgba(token.colorBgContainer, 0.95), rgba(token.colorBgContainer, 0), token.colorText, token.colorBorderSecondary, token.colorTextTertiary, token.colorText),
    top: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      .dumi-default-previewer {\n        flex-direction: column-reverse;\n\n        &-meta {\n          display: flex;\n          flex-direction: column;\n        }\n\n        &-actions {\n          order: 1;\n        }\n\n        &-desc {\n          order: 2;\n        }\n      }\n    "]))),
    left: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      .dumi-default-previewer {\n        flex-direction: row-reverse;\n        &-demo {\n          width: 50%;\n          border-left: 1px solid ", ";\n        }\n        &-meta {\n          width: 50%;\n        }\n      }\n    "])), token.colorBorderSecondary),
    right: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      .dumi-default-previewer {\n        flex-direction: row;\n        &-demo {\n          width: 50%;\n          border-right: 1px solid ", ";\n        }\n        &-meta {\n          width: 50%;\n        }\n      }\n    "])), token.colorBorderSecondary)
  };
});
export default (function (props) {
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx,
    theme = _useStyles.theme;
  var height = useMemo(function () {
    if (typeof props.iframe === 'number') {
      return props.iframe;
    }
    if (props.height) {
      return props.height;
    }
    return 300;
  }, [props.iframe, props.height]);
  return /*#__PURE__*/_jsx("div", {
    className: cx(styles.container, styles[props.codePlacement]),
    children: /*#__PURE__*/_jsx(IntersectionLoad, {
      height: height,
      elementType: "section",
      children: /*#__PURE__*/_jsx(DemoProvider, {
        inherit: props.inherit || theme.demoInheritSiteTheme,
        children: /*#__PURE__*/_jsx(Previewer, _objectSpread({}, props))
      })
    })
  });
});