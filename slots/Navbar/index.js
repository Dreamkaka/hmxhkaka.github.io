import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { Tabs } from 'antd';
import { createStyles } from 'antd-style';
import { history, Link } from 'dumi';
import NavbarExtra from 'dumi/theme-default/slots/NavbarExtra';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { activePathSel, useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    responsive = _ref.responsive,
    token = _ref.token,
    stylish = _ref.stylish,
    prefixCls = _ref.prefixCls;
  var prefix = ".".concat(prefixCls, "-tabs");
  var marginHoriz = 16;
  var paddingVertical = 6;
  return {
    tabs: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "-tab + ", "-tab {\n        margin: ", "px 4px !important;\n        padding: 0 12px !important;\n      }\n\n      ", "-tab {\n        color: ", ";\n        transition: background-color 100ms ease-out;\n\n        &:first-child {\n          margin: ", "px 4px ", "px 0;\n          padding: ", "px 12px !important;\n        }\n\n        &:hover {\n          color: ", " !important;\n          background: ", ";\n          border-radius: ", "px;\n        }\n      }\n\n      ", "-nav {\n        margin-bottom: 0;\n      }\n\n      ", " {\n        display: none;\n      }\n    "])), prefix, prefix, marginHoriz, prefix, token.colorTextSecondary, marginHoriz, marginHoriz, paddingVertical, token.colorText, token.colorFillTertiary, token.borderRadius, prefix, responsive.mobile),
    link: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), stylish.resetLinkColor)
  };
});
var Navbar = function Navbar() {
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var nav = useSiteStore(function (s) {
    return s.navData;
  }, shallow);
  var activePath = useSiteStore(activePathSel);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Tabs, {
      onChange: function onChange(path) {
        var _nav$find;
        var url = (_nav$find = nav.find(function (i) {
          return i.activePath === path || i.link === path;
        })) === null || _nav$find === void 0 ? void 0 : _nav$find.link;
        if (!url) return;
        history.push(url);
      },
      activeKey: activePath,
      className: styles.tabs,
      items: nav.map(function (item) {
        return {
          label: /*#__PURE__*/_jsx(Link, {
            className: styles.link,
            to: item.link,
            children: item.title
          }),
          key: item.activePath || item.link
        };
      })
    }), /*#__PURE__*/_jsx(NavbarExtra, {})]
  });
};
export default /*#__PURE__*/memo(Navbar);