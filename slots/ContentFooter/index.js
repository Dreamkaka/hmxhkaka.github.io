import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { contentBottomSel, useSiteStore } from "../../store";
import Linker from "./Linker";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var ContentFooter = function ContentFooter() {
  var _useSiteStore = useSiteStore(contentBottomSel, isEqual),
    prev = _useSiteStore.prev,
    next = _useSiteStore.next;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  return /*#__PURE__*/_jsxs(Flexbox, {
    horizontal: !mobile,
    gap: mobile ? 12 : 0,
    distribution: 'space-between',
    style: {
      margin: mobile ? 12 : 0
    },
    children: [prev ? /*#__PURE__*/_jsx(Linker, _objectSpread({
      type: 'prev'
    }, prev)) : /*#__PURE__*/_jsx("div", {}), next ? /*#__PURE__*/_jsx(Linker, _objectSpread({
      type: 'next'
    }, next)) : /*#__PURE__*/_jsx("div", {})]
  });
};
export default /*#__PURE__*/memo(ContentFooter);