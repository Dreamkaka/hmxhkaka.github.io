import { useResponsive } from 'antd-style';
import { Link } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { useSiteStore } from "../../store/useSiteStore";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Logo = function Logo() {
  var themeConfig = useSiteStore(function (s) {
    return s.siteData.themeConfig;
  }, isEqual);
  var locale = useSiteStore(function (s) {
    return s.locale;
  }, isEqual);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  return themeConfig && /*#__PURE__*/_jsxs(Link, {
    className: cx(styles),
    to: 'base' in locale ? locale.base : '/',
    children: [!!themeConfig.logo && /*#__PURE__*/_jsx("img", {
      src: themeConfig.logo,
      alt: themeConfig.name,
      height: mobile ? 32 : 40
    }), themeConfig.name]
  });
};
export default /*#__PURE__*/memo(Logo);