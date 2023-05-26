import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { getHighlighter, setCDN } from 'shiki-es';
import useControlledState from 'use-merge-value';
import { languageMap } from "./language";
// 使用 element cdn 提升加载速度
setCDN('https://npm.elemecdn.com/shiki-es/dist/assets');
var defaultTheme = {
  dark: 'github-dark',
  light: 'github-light'
};
export var useShiki = function useShiki(_ref) {
  var onLoadingChange = _ref.onLoadingChange,
    theme = _ref.theme;
  var mergeTheme = useMemo(function () {
    return _objectSpread(_objectSpread({}, defaultTheme), theme);
  }, [theme]);
  var _useControlledState = useControlledState(defaultTheme, {
      value: mergeTheme
    }),
    _useControlledState2 = _slicedToArray(_useControlledState, 1),
    THEME = _useControlledState2[0];
  var shikiRef = useRef(null);
  var initHighlighter = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(theme) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            onLoadingChange === null || onLoadingChange === void 0 ? void 0 : onLoadingChange(true);
            _context.next = 3;
            return getHighlighter({
              langs: Object.keys(languageMap),
              themes: Object.values(theme)
            });
          case 3:
            shikiRef.current = _context.sent;
            onLoadingChange === null || onLoadingChange === void 0 ? void 0 : onLoadingChange(false);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function initHighlighter(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  // 初始化 Shiki HightLighter
  useEffect(function () {
    initHighlighter(THEME);
  }, [THEME]);
  return useCallback(function (text, language, isDarkMode) {
    try {
      var _shikiRef$current;
      return ((_shikiRef$current = shikiRef.current) === null || _shikiRef$current === void 0 ? void 0 : _shikiRef$current.codeToHtml(text, {
        lang: language,
        theme: isDarkMode ? THEME.dark : THEME.light
      })) || '';
    } catch (e) {
      onLoadingChange === null || onLoadingChange === void 0 ? void 0 : onLoadingChange(true);
      initHighlighter(THEME);
    }
  }, [THEME]);
};