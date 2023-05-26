import { Alert } from 'antd';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var Container = function Container(_ref) {
  var type = _ref.type,
    title = _ref.title,
    children = _ref.children;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  return /*#__PURE__*/_jsx("div", {
    "data-type": type,
    className: styles.container,
    children: /*#__PURE__*/_jsx(Alert, {
      showIcon: true,
      type: type,
      message: title || type.toUpperCase(),
      description: /*#__PURE__*/_jsx("div", {
        className: cx(styles.desc,
        // 为了让 markdown 的样式生效，需要在这里添加一个额外的 class
        'markdown'),
        children: children
      }),
      className: styles.alert
    })
  });
};
export default Container;