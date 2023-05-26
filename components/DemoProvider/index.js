import { ConfigProvider } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";
var DemoProvider = function DemoProvider(_ref) {
  var children = _ref.children,
    _ref$inherit = _ref.inherit,
    inherit = _ref$inherit === void 0 ? false : _ref$inherit;
  return /*#__PURE__*/_jsx(ConfigProvider, {
    prefixCls: inherit ? 'ant' : undefined,
    theme: {
      inherit: inherit
    },
    children: children
  });
};
export default DemoProvider;