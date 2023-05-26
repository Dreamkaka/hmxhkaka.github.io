import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Drawer, Menu } from 'antd';
import { Link } from 'dumi';
import isEqual from 'fast-deep-equal';
import { uniq } from 'lodash';
import { useState } from 'react';
import { Center } from 'react-layout-kit';
import { activePathSel, useSiteStore } from "../../store";
import { FillRect, useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Burger = function Burger() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var nav = useSiteStore(function (s) {
    return s.navData;
  }, isEqual);
  var sidebar = useSiteStore(function (s) {
    return s.sidebar;
  }, isEqual);
  var activePath = useSiteStore(activePathSel);
  var pathname = useSiteStore(function (s) {
    return s.location.pathname;
  });
  return /*#__PURE__*/_jsxs(Center, {
    className: styles.container,
    onClick: function onClick() {
      setOpened(!opened);
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: cx(styles.icon, opened ? styles.active : '')
    }), /*#__PURE__*/_jsxs(Drawer, {
      open: opened,
      placement: 'left',
      closeIcon: null,
      rootClassName: styles.drawerRoot,
      className: styles.drawer,
      width: '100vw',
      headerStyle: {
        display: 'none'
      },
      bodyStyle: {
        padding: 0
      },
      children: [/*#__PURE__*/_jsx(FillRect, {
        style: {
          height: 24
        }
      }), /*#__PURE__*/_jsx(Menu, {
        mode: 'inline',
        selectedKeys: uniq([activePath, "s-".concat(pathname)]),
        openKeys: [activePath],
        className: styles.menu,
        items: nav.map(function (item) {
          return {
            label: /*#__PURE__*/_jsx(Link, {
              to: item.link,
              children: item.title
            }),
            key: item.activePath || item.link,
            children: (item.activePath || item.link) === activePath && (sidebar === null || sidebar === void 0 ? void 0 : sidebar.map(function (group) {
              return !group.link && {
                label: group.title,
                type: 'group',
                children: group.children.map(function (item) {
                  return {
                    label: /*#__PURE__*/_jsx(Link, {
                      to: item.link,
                      onClick: function onClick() {
                        setOpened(false);
                      },
                      children: item.title
                    }),
                    key: "s-".concat(item.link)
                  };
                })
              };
            }))
          };
        })
      }), /*#__PURE__*/_jsx(FillRect, {
        style: {
          flex: 1
        }
      })]
    })]
  });
};
export default Burger;