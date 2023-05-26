import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import LangSwitch from "dumi/theme/slots/LangSwitch";
import Logo from "dumi/theme/slots/Logo";
import Navbar from "dumi/theme/slots/Navbar";
import SearchBar from "dumi/theme/slots/SearchBar";
import Burger from "../../components/Burger";
import GithubButton from "../../components/GithubButton";
import ThemeSwitch from "../../components/ThemeSwitch";
import { useResponsive } from 'antd-style';
import { useSiteStore } from "../../store/useSiteStore";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Header = function Header() {
  var hasHeader = useSiteStore(function (s) {
    return !!s.routeMeta.frontmatter;
  });
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var _useStyle = useStyle(),
    styles = _useStyle.styles;
  return !hasHeader ? null : /*#__PURE__*/_jsx("div", {
    className: styles.header,
    children: /*#__PURE__*/_jsx(Flexbox, {
      horizontal: true,
      distribution: 'space-between',
      align: 'center',
      width: 'auto',
      className: styles.content,
      children: mobile ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Flexbox, {
          children: /*#__PURE__*/_jsx(Burger, {})
        }), /*#__PURE__*/_jsx(Flexbox, {
          horizontal: true,
          className: styles.left,
          children: /*#__PURE__*/_jsx(Logo, {})
        }), /*#__PURE__*/_jsx(Flexbox, {
          children: /*#__PURE__*/_jsx(ThemeSwitch, {})
        })]
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx(Flexbox, {
          horizontal: true,
          className: styles.left,
          children: /*#__PURE__*/_jsx(Logo, {})
        }), /*#__PURE__*/_jsx(Flexbox, {
          style: {
            marginLeft: 48,
            alignSelf: 'end'
          },
          children: /*#__PURE__*/_jsx(Navbar, {})
        }), /*#__PURE__*/_jsxs("section", {
          className: styles.right,
          children: [/*#__PURE__*/_jsx("div", {}), /*#__PURE__*/_jsxs(Flexbox, {
            gap: 16,
            horizontal: true,
            align: 'center',
            className: "dumi-default-header-right-aside",
            children: [/*#__PURE__*/_jsx(SearchBar, {}), /*#__PURE__*/_jsx(LangSwitch, {}), /*#__PURE__*/_jsx(GithubButton, {}), /*#__PURE__*/_jsx(ThemeSwitch, {})]
          })]
        })]
      })
    })
  });
};
export default /*#__PURE__*/memo(Header);