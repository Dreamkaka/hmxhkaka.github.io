import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { useTheme } from 'antd-style';
import { memo } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { languageMap } from "./language";
import { jsx as _jsx } from "react/jsx-runtime";
Object.entries(languageMap).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  SyntaxHighlighter.registerLanguage(key, value);
});
var defaultTheme = {
  dark: oneDark,
  light: oneLight
};
export var Prism = /*#__PURE__*/memo(function (_ref3) {
  var children = _ref3.children,
    language = _ref3.language,
    theme = _ref3.theme;
  var _useTheme = useTheme(),
    isDarkMode = _useTheme.isDarkMode,
    lineHeight = _useTheme.lineHeight;
  var Theme = _objectSpread(_objectSpread({}, defaultTheme), theme);
  return /*#__PURE__*/_jsx(SyntaxHighlighter, {
    language: language,
    style: isDarkMode ? Theme.dark : Theme.light,
    customStyle: {
      borderRadius: 8,
      lineHeight: lineHeight
    },
    children: children
  });
});