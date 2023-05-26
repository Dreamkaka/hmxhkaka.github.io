import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ArrowDownOutlined, MenuOutlined } from '@ant-design/icons';
import { Anchor, Collapse, ConfigProvider } from 'antd';
import { useResponsive, useTheme } from 'antd-style';
import { memo, useMemo } from 'react';
import useControlledState from 'use-merge-value';
import { useStyles } from "./style";

/**
 * @title 目录组件属性
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Toc = /*#__PURE__*/memo(function (_ref) {
  var items = _ref.items,
    activeKey = _ref.activeKey,
    onChange = _ref.onChange;
  var _useControlledState = useControlledState('', {
      value: activeKey,
      onChange: onChange
    }),
    _useControlledState2 = _slicedToArray(_useControlledState, 2),
    activeLink = _useControlledState2[0],
    setActiveLink = _useControlledState2[1];
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var theme = useTheme();
  var activeAnchor = items.find(function (item) {
    return item.id === activeLink;
  });
  var linkItems = useMemo(function () {
    return items.map(function (item) {
      var _item$children;
      return {
        href: "#".concat(item.id),
        title: item.title,
        key: item.id,
        children: (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function (child) {
          return {
            href: "#".concat(child.id),
            title: child === null || child === void 0 ? void 0 : child.title,
            key: child.id
          };
        })
      };
    });
  }, [items]);
  return ((items === null || items === void 0 ? void 0 : items.length) === 0 ? null : mobile ? /*#__PURE__*/_jsx(ConfigProvider, {
    theme: {
      token: {
        fontSize: 12,
        sizeStep: 3
      }
    },
    children: /*#__PURE__*/_jsx("div", {
      className: styles.mobileCtn,
      children: /*#__PURE__*/_jsx(Collapse, {
        bordered: false,
        ghost: true,
        expandIconPosition: 'end',
        expandIcon: function expandIcon(_ref2) {
          var isActive = _ref2.isActive;
          return isActive ? /*#__PURE__*/_jsx(ArrowDownOutlined, {}) : /*#__PURE__*/_jsx(MenuOutlined, {});
        },
        className: styles.expand,
        children: /*#__PURE__*/_jsx(Collapse.Panel, {
          forceRender: true,
          header: !activeAnchor ? '目录' : activeAnchor.title,
          children: /*#__PURE__*/_jsx(ConfigProvider, {
            theme: {
              token: {
                fontSize: 14,
                sizeStep: 4
              }
            },
            children: /*#__PURE__*/_jsx(Anchor, {
              onChange: function onChange(currentLink) {
                setActiveLink(currentLink.replace('#', ''));
              },
              targetOffset: theme.headerHeight + 12,
              items: linkItems
            })
          })
        }, 'toc')
      })
    })
  }) : /*#__PURE__*/_jsxs("div", {
    className: styles.container,
    children: [/*#__PURE__*/_jsx("h4", {
      children: "Table of Contents"
    }), /*#__PURE__*/_jsx(Anchor, {
      items: linkItems,
      className: styles.anchor,
      targetOffset: theme.headerHeight + 12
    })]
  })) || null;
});
export default Toc;