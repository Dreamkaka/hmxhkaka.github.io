import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Tooltip } from 'antd';
import copy from 'copy-to-clipboard';
import { memo } from 'react';
import { useCopied } from "../../hooks/useCopied";
import SyntaxHighlighter from "./Highlighter";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export { Prism } from "./Prism";
export var Highlighter = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
    language = _ref.language,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? true : _ref$background,
    type = _ref.type,
    className = _ref.className,
    style = _ref.style,
    _ref$trim = _ref.trim,
    trim = _ref$trim === void 0 ? true : _ref$trim,
    syntaxThemes = _ref.syntaxThemes,
    _ref$copyable = _ref.copyable,
    copyable = _ref$copyable === void 0 ? true : _ref$copyable;
  var _useCopied = useCopied(),
    copied = _useCopied.copied,
    setCopied = _useCopied.setCopied;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    theme = _useStyles.theme,
    cx = _useStyles.cx;
  var container = cx(styles.container, background && styles.withBackground, className);
  return /*#__PURE__*/_jsxs("div", {
    // 用于标记是 markdown 中的代码块，避免和普通 code 的样式混淆
    "data-code-type": "highlighter",
    className: container,
    style: style,
    children: [copyable && /*#__PURE__*/_jsx(ConfigProvider, {
      theme: {
        token: {
          colorBgContainer: theme.colorBgElevated
        }
      },
      children: /*#__PURE__*/_jsx(Tooltip, {
        placement: 'left',
        arrow: false,
        title: copied ? /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(CheckOutlined, {
            style: {
              color: theme.colorSuccess
            }
          }), " \u590D\u5236\u6210\u529F"]
        }) : '复制',
        children: /*#__PURE__*/_jsx(Button, {
          icon: /*#__PURE__*/_jsx(CopyOutlined, {}),
          className: styles.button,
          onClick: function onClick() {
            copy(children);
            setCopied();
          }
        })
      })
    }), language && /*#__PURE__*/_jsx("div", {
      className: styles.lang,
      children: language.toLowerCase()
    }), /*#__PURE__*/_jsx(SyntaxHighlighter, {
      language: language === null || language === void 0 ? void 0 : language.toLowerCase(),
      type: type,
      syntaxThemes: syntaxThemes,
      children: trim ? children.trim() : children
    })]
  });
});
export default Highlighter;