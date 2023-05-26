import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { memo, useMemo } from 'react';
import { ApiHeader as Header } from "../../components/ApiHeader";
import { apiHeaderSel, useSiteStore } from "../../store";
import BundlephobiaFilled from "./BundlephobiaFilled";
import Graph from "./Graph";
import NpmFilled from "./NpmFilled";
import PackagePhobia from "./PackagePhobia";
import Unpkg from "./Unpkg";
import { jsx as _jsx } from "react/jsx-runtime";
var ApiHeader = /*#__PURE__*/memo(function () {
  var props = useSiteStore(apiHeaderSel);
  var pkg = props.pkg;
  var packages = useMemo(function () {
    return [{
      label: 'NPM',
      icon: /*#__PURE__*/_jsx(NpmFilled, {}),
      children: 'NPM',
      url: "https://www.npmjs.com/package/".concat(pkg)
    }, {
      label: '预览产物',
      icon: /*#__PURE__*/_jsx(Unpkg, {}),
      children: 'UNPKG',
      url: "https://unpkg.com/browse/".concat(pkg, "/")
    }, {
      label: '查阅产物体积',
      icon: /*#__PURE__*/_jsx(BundlephobiaFilled, {}),
      children: 'BundlePhobia',
      url: "https://bundlephobia.com/package/".concat(pkg)
    }, {
      label: '查阅安装包体积',
      icon: /*#__PURE__*/_jsx(PackagePhobia, {}),
      children: 'PackagePhobia',
      url: "https://packagephobia.com/result?p=".concat(pkg)
    }, {
      label: '分析依赖图',
      icon: /*#__PURE__*/_jsx(Graph, {}),
      children: 'Anvaka Graph',
      url: "https://npm.anvaka.com/#/view/2d/".concat(pkg)
    }];
  }, [pkg]);
  return /*#__PURE__*/_jsx(Header, _objectSpread({
    serviceList: packages
  }, props));
});
export default ApiHeader;