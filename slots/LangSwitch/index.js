import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button } from 'antd';
import { history, Link, useLocation } from 'dumi';
import { memo, useEffect, useState } from 'react';
import NativeSelect from "../../components/NativeSelect";
import { useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
function getTargetLocalePath(_ref) {
  var pathname = _ref.pathname,
    current = _ref.current,
    target = _ref.target;
  var clearPath = 'base' in current ?
  // handle '/en-US/a' => '/a' or '/en-US' => '' => '/'
  pathname.replace(current.base.replace(/\/$/, ''), '') || '/' : pathname.replace(new RegExp("".concat(current.suffix, "$")), '');
  return 'base' in target ? "".concat(
  // for `/` base, strip duplicated leading slash
  target.base.replace(/\/$/, '')).concat(clearPath) // for `/` clearPath, strip duplicated ending slash
  .replace(/([^/])\/$/, '$1') : "".concat(clearPath).concat(target.suffix);
}
var languageMap = {
  'zh-CN': '🇨🇳',
  'en-US': '🇺🇸',
  'jp-JP': '🇯🇵',
  'ko-KR': '🇰🇷',
  'ru-RU': '🇷🇺',
  'es-ES': '🇪🇸',
  'fr-FR': '🇫🇷',
  'de-DE': '🇩🇪',
  'pt-BR': '🇧🇷',
  'it-IT': '🇮🇹',
  'tr-TR': '🇹🇷',
  'vi-VN': '🇻🇳'
};
var displayLangMap = {
  'zh-CN': '中',
  'en-US': 'EN'
};
var SingleSwitch = function SingleSwitch(_ref2) {
  var locale = _ref2.locale,
    current = _ref2.current;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var _useState = useState(function () {
      return getTargetLocalePath({
        pathname: pathname,
        current: current,
        target: locale
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    path = _useState2[0],
    setPath = _useState2[1];
  useEffect(function () {
    setPath(getTargetLocalePath({
      pathname: pathname,
      current: current,
      target: locale
    }));
  }, [pathname, current.id, locale.id]);
  return /*#__PURE__*/_jsx(Link, {
    to: path,
    children: /*#__PURE__*/_jsx(Button, {
      style: {
        minWidth: 34,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: displayLangMap[locale.id]
    })
  });
};
var LangSwitch = function LangSwitch() {
  var locales = useSiteStore(function (s) {
    return s.siteData.locales;
  });
  var current = useSiteStore(function (s) {
    return s.locale;
  });

  // do not render in single language
  if (locales.length <= 1) return null;
  return locales.length > 2 ? /*#__PURE__*/_jsx(NativeSelect, {
    value: locales.findIndex(function (l) {
      return l.id === current.id;
    }),
    onChange: function onChange(index) {
      console.log(getTargetLocalePath({
        pathname: location.pathname,
        current: current,
        target: locales[index]
      }));
      history.push(getTargetLocalePath({
        pathname: location.pathname,
        current: current,
        target: locales[index]
      }));
    },
    options: locales.map(function (item) {
      return {
        value: item.id,
        label: displayLangMap[item.id]
      };
    }),
    renderItem: function renderItem(item, index) {
      return "".concat(languageMap[locales[index].id], " ").concat(locales[index].name);
    },
    style: {
      height: 32,
      minWidth: 32,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }) :
  /*#__PURE__*/
  // single language switch
  _jsx(SingleSwitch, {
    locale: locales.find(function (_ref3) {
      var id = _ref3.id;
      return id !== current.id;
    }),
    current: current
  });
};
export default /*#__PURE__*/memo(LangSwitch);