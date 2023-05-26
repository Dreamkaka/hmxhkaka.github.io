import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { Tabs } from 'antd';
import { useIntl } from 'dumi';
import { memo } from 'react';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var ContentTabs = /*#__PURE__*/memo(function (_ref) {
  var tabs = _ref.tabs,
    key = _ref.tabKey,
    _onChange = _ref.onChange;
  var intl = useIntl();
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  // TODO: tab.Extra & tab.Action render

  return !!tabs && Boolean(tabs === null || tabs === void 0 ? void 0 : tabs.length) ? /*#__PURE__*/_jsx(Tabs, {
    "data-page-tabs": true,
    activeKey: key || 'default',
    className: styles.cls,
    items: [{
      key: 'default',
      value: 'default',
      label: '文档'
    }].concat(_toConsumableArray(tabs.map(function (tab) {
      return {
        key: tab.key,
        value: tab.key,
        label: tab.titleIntlId ? intl.formatMessage({
          id: tab.titleIntlId
        }) : tab.meta.frontmatter.title
      };
    }))),
    onChange: function onChange(key) {
      if (key === 'default') {
        _onChange();
      } else {
        _onChange(tabs.find(function (t) {
          return t.key === key;
        }));
      }
    }
  }) : null;
});
export default ContentTabs;