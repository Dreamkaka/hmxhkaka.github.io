import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "label", "prefixCls", "isSelected", "isActive", "disabled"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { forwardRef } from 'react';
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var SelectItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _cx;
  var value = _ref.value,
    label = _ref.label,
    prefixCls = _ref.prefixCls,
    isSelected = _ref.isSelected,
    isActive = _ref.isActive,
    disabled = _ref.disabled,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles(prefixCls),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  return /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
    type: 'button',
    disabled: disabled,
    "aria-selected": isSelected,
    role: "option",
    tabIndex: -1,
    className: cx(styles.item, (_cx = {}, _defineProperty(_cx, styles.selected, isSelected), _defineProperty(_cx, styles.active, isActive), _cx)),
    ref: ref
  }, props), {}, {
    children: label
  }), value);
});
export default SelectItem;