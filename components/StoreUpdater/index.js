import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["setLoading"],
  _excluded2 = ["setLoading"];
import { useDebounceEffect } from 'ahooks';
import { useLocale, useLocation, useNavData, useRouteMeta, useSidebarData, useSiteData, useTabMeta } from 'dumi';
import isEqual from 'fast-deep-equal';
import React, { memo, useEffect } from 'react';
import { useSiteStore } from "../../store/useSiteStore";
var isBrowser = typeof window !== 'undefined';
var SSRInit = {};
var useReact18xUpdater = function useReact18xUpdater(effect, deps) {
  useEffect(function () {
    React.startTransition(function () {
      effect();
    });
  }, deps);
};
var useLegacyUpdater = function useLegacyUpdater(effect, deps) {
  useDebounceEffect(function () {
    effect();
  }, deps, {
    wait: 32,
    maxWait: 96
  });
};
var useUpdater = typeof React.startTransition === 'function' ? useReact18xUpdater : useLegacyUpdater;
var useSyncState = function useSyncState(key, value, updateMethod) {
  var updater = updateMethod ? updateMethod : function (key, value) {
    return useSiteStore.setState(_defineProperty({}, key, value));
  };

  // 如果是 Node 环境，直接更新一次 store
  // 但是为了避免多次更新 store，所以加一个标记
  if (!isBrowser && !SSRInit[key]) {
    updater(key, value);
    SSRInit[key] = true;
  }
  useUpdater(function () {
    updater(key, value);
  }, [value]);
};
var homeNav = {
  title: '首页',
  link: '/',
  activePath: '/'
};
export var StoreUpdater = /*#__PURE__*/memo(function () {
  var siteData = useSiteData();
  var sidebar = useSidebarData();
  var routeMeta = useRouteMeta();
  var tabMeta = useTabMeta();
  var navData = useNavData();
  var location = useLocation();
  var locale = useLocale();
  useSyncState('siteData', siteData, function () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var setLoading = siteData.setLoading,
      data = _objectWithoutProperties(siteData, _excluded);
    var _useSiteStore$getStat = useSiteStore.getState(),
      _useSiteStore$getStat2 = _useSiteStore$getStat.siteData,
      _ = _useSiteStore$getStat2.setLoading,
      prevData = _objectWithoutProperties(_useSiteStore$getStat2, _excluded2);
    if (isEqual(data, prevData)) return;
    useSiteStore.setState({
      siteData: siteData
    });
  });
  useSyncState('sidebar', sidebar);
  useSyncState('routeMeta', routeMeta);
  useSyncState('location', location);
  useSyncState('tabMeta', tabMeta);
  useSyncState('locale', locale);
  useSyncState('navData', navData, function () {
    var data = siteData.themeConfig.hideHomeNav ? navData : [homeNav].concat(_toConsumableArray(navData));
    useSiteStore.setState({
      navData: data
    });
  });
  return null;
});