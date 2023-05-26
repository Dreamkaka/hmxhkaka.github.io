import { Button } from 'antd';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var HeroButton = function HeroButton(_ref) {
  var children = _ref.children;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx(Button, {
    size: 'large',
    shape: 'round',
    type: 'primary',
    className: styles.button,
    children: children
  });
};
export default HeroButton;