import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import FeatureItem from "./Item";
import { useStyles } from "./style";

/**
 * @title Features Props
 */
import { jsx as _jsx } from "react/jsx-runtime";
var Features = function Features(_ref) {
  var items = _ref.items,
    style = _ref.style;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  if (!Boolean(items === null || items === void 0 ? void 0 : items.length)) return null;
  return /*#__PURE__*/_jsx("div", {
    className: styles.container,
    style: style,
    children: items.map(function (item) {
      return /*#__PURE__*/_jsx(FeatureItem, _objectSpread({}, item), item.title);
    })
  });
};
export default Features;