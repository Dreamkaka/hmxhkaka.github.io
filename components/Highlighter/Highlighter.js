import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Loading3QuartersOutlined as Loading } from '@ant-design/icons';
import { useThemeMode } from 'antd-style';
import { memo, useState } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { useStyles } from "./Highlighter.style";
import { Prism } from "./Prism";
import { useShiki } from "./useShiki";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var SyntaxHighlighter = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
    language = _ref.language,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'shiki' : _ref$type,
    syntaxTheme = _ref.syntaxThemes;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  var _useThemeMode = useThemeMode(),
    isDarkMode = _useThemeMode.isDarkMode;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var codeToHtml = useShiki({
    onLoadingChange: setLoading,
    theme: syntaxTheme === null || syntaxTheme === void 0 ? void 0 : syntaxTheme.shiki
  });
  switch (type) {
    case 'prism':
      return /*#__PURE__*/_jsx(Flexbox, {
        className: styles.prism,
        children: /*#__PURE__*/_jsx(Prism, {
          language: language,
          children: children
        })
      });
    default:
    case 'shiki':
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [loading ? /*#__PURE__*/_jsx(Prism, {
          language: language,
          children: children
        }) : /*#__PURE__*/_jsx("div", {
          dangerouslySetInnerHTML: {
            __html: codeToHtml(children, language, isDarkMode) || ''
          },
          className: styles.shiki
        }), loading && /*#__PURE__*/_jsxs(Center, {
          horizontal: true,
          gap: 8,
          className: styles.loading,
          children: [/*#__PURE__*/_jsx(Loading, {
            spin: true,
            style: {
              color: theme.colorTextTertiary
            }
          }), "shiki \u7740\u8272\u5668\u51C6\u5907\u4E2D..."]
        })]
      });
  }
});
export default SyntaxHighlighter;