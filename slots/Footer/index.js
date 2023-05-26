import { Divider } from 'antd';
import { useResponsive } from 'antd-style';
import { Center, Flexbox } from 'react-layout-kit';
import Foot from "../../components/Footer";
import { githubSel, useSiteStore } from "../../store";
import { getColumns } from "./columns";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Footer = function Footer() {
  var _useSiteStore = useSiteStore(function (s) {
      return s.siteData;
    }),
    themeConfig = _useSiteStore.themeConfig,
    pkg = _useSiteStore.pkg;
  var githubUrl = useSiteStore(githubSel);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  if (!themeConfig.footer) return null;
  var footer = themeConfig.footerConfig;
  var columns = (footer === null || footer === void 0 ? void 0 : footer.columns) === false ? undefined : getColumns({
    github: githubUrl || pkg.homepage
  });
  var bottomFooter = (footer === null || footer === void 0 ? void 0 : footer.bottom) || themeConfig.footer;
  return /*#__PURE__*/_jsx(Foot, {
    theme: (footer === null || footer === void 0 ? void 0 : footer.theme) || theme.appearance,
    columns: columns,
    bottom: mobile ? /*#__PURE__*/_jsxs(Center, {
      className: styles.container,
      children: ["Copyright \xA9 2022-", new Date().getFullYear(), /*#__PURE__*/_jsx(Flexbox, {
        align: 'center',
        horizontal: true,
        dangerouslySetInnerHTML: {
          __html: bottomFooter
        }
      })]
    }) : /*#__PURE__*/_jsxs(Center, {
      horizontal: true,
      children: ["Copyright \xA9 2022-", new Date().getFullYear(), " ", /*#__PURE__*/_jsx(Divider, {
        type: 'vertical'
      }), /*#__PURE__*/_jsx("span", {
        dangerouslySetInnerHTML: {
          __html: bottomFooter
        }
      })]
    })
  });
};
export default Footer;