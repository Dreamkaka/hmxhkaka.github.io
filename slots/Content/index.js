import { Skeleton } from 'antd';
import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

// @ts-ignore
import ContentFooter from "dumi/theme/slots/ContentFooter";
import { useSiteStore } from "../../store";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Content = function Content(_ref) {
  var children = _ref.children;
  var loading = useSiteStore(function (s) {
    return s.siteData.loading;
  });
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  return /*#__PURE__*/_jsxs(Flexbox, {
    width: '100%',
    gap: mobile ? 0 : 24,
    children: [/*#__PURE__*/_jsxs("div", {
      className: cx('dumi-antd-style-content', styles.content),
      children: [/*#__PURE__*/_jsx(Skeleton, {
        active: true,
        paragraph: true,
        loading: loading
      }), /*#__PURE__*/_jsx("div", {
        style: {
          display: loading ? 'none' : undefined
        },
        children: children
      })]
    }), /*#__PURE__*/_jsx(ContentFooter, {})]
  });
};
export default /*#__PURE__*/memo(Content);