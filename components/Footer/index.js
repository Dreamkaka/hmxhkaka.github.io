import RcFooter from 'rc-footer';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var Footer = function Footer(_ref) {
  var columns = _ref.columns,
    bottom = _ref.bottom,
    theme = _ref.theme;
  var isEmpty = !columns || (columns === null || columns === void 0 ? void 0 : columns.length) === 0;
  var _useStyles = useStyles(isEmpty),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx("div", {
    className: styles.container,
    children: /*#__PURE__*/_jsx(RcFooter, {
      theme: theme,
      className: styles.footer,
      columns: columns,
      bottom: bottom
    })
  });
};
export default Footer;