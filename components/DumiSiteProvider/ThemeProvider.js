import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { StyleProvider, ThemeProvider as Provider } from 'antd-style';
import { useCallback } from 'react';
import { useThemeStore } from "../../store/useThemeStore";
import { createCustomToken, getAntdTheme, getCustomStylish } from "../../styles";
import { jsx as _jsx } from "react/jsx-runtime";
export var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    token = _ref.token,
    ssrInline = _ref.ssrInline,
    cache = _ref.cache;
  var themeMode = useThemeStore(function (s) {
    return s.themeMode;
  });
  var getCustomToken = useCallback(function (params) {
    var base = createCustomToken(params);
    if (token) {
      return _objectSpread(_objectSpread({}, base), token);
    } else {
      return base;
    }
  }, [token]);
  return /*#__PURE__*/_jsx(StyleProvider, {
    speedy: process.env.NODE_ENV === 'production',
    prefix: 'site',
    cache: cache,
    ssrInline: ssrInline,
    children: /*#__PURE__*/_jsx(Provider, {
      prefixCls: 'site',
      themeMode: themeMode,
      theme: getAntdTheme,
      customStylish: getCustomStylish,
      customToken: getCustomToken,
      children: children
    })
  });
};