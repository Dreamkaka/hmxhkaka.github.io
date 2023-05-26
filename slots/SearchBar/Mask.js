import { useEffect } from 'react';
import { useStyles } from "./Mask.style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var Mask = function Mask(props) {
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  useEffect(function () {
    if (props.visible) {
      document.body.style.overflow = 'hidden';
    } else {
      var _props$onClose;
      document.body.style.overflow = '';
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props);
    }
  }, [props.visible]);
  return props.visible ? /*#__PURE__*/_jsxs("div", {
    className: styles.modal,
    children: [/*#__PURE__*/_jsx("div", {
      className: styles.mask,
      onClick: props.onMaskClick
    }), /*#__PURE__*/_jsx("div", {
      className: styles.content,
      children: props.children
    })]
  }) : null;
};