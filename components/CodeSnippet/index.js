import { CheckOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useResponsive } from 'antd-style';
import copy from 'copy-to-clipboard';
import { Highlighter } from "../Highlighter";
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useCopied } from "../../hooks/useCopied";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var CodeSnippet = function CodeSnippet(_ref) {
  var children = _ref.children;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var _useCopied = useCopied(),
    copied = _useCopied.copied,
    setCopied = _useCopied.setCopied;
  return /*#__PURE__*/_jsx(Tooltip, {
    placement: mobile ? undefined : 'right',
    title: copied ? /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(CheckOutlined, {
        style: {
          color: theme.colorSuccess
        }
      }), " \u590D\u5236\u6210\u529F"]
    }) : '复制',
    children: /*#__PURE__*/_jsx("div", {
      className: styles,
      onClick: function onClick() {
        copy(children);
        setCopied();
      },
      children: /*#__PURE__*/_jsx(Highlighter, {
        background: false,
        type: 'prism',
        copyable: false,
        syntaxThemes: {
          prism: {
            dark: vscDarkPlus,
            light: vs
          }
        },
        language: 'js',
        children: children
      })
    })
  });
};
export default CodeSnippet;