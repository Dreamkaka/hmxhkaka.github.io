import { NavLink } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { useSiteStore } from "../../store/useSiteStore";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Sidebar = function Sidebar() {
  var sidebar = useSiteStore(function (s) {
    return s.sidebar;
  }, isEqual);
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var isEmptySideBar = !sidebar || sidebar.length === 0;
  return isEmptySideBar ? null : /*#__PURE__*/_jsx("div", {
    className: styles.sidebar,
    children: sidebar.map(function (item, i) {
      return /*#__PURE__*/_jsxs("dl", {
        children: [item.title && /*#__PURE__*/_jsx("dt", {
          children: item.title
        }), item.children.map(function (child) {
          return /*#__PURE__*/_jsx("dd", {
            children: /*#__PURE__*/_jsx(NavLink, {
              to: child.link,
              title: child.title,
              end: true,
              children: child.title
            })
          }, child.link);
        })]
      }, String(i));
    })
  });
};
export default /*#__PURE__*/memo(Sidebar);