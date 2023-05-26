import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
export * from "./apiHeader";
export * from "./hero";
export * from "./siteBasicInfo";
export * from "./token";
export var activePathSel = function activePathSel(s) {
  if (s.location.pathname === '/') return '/';
  var item = s.navData.filter(function (i) {
    return i.link !== '/';
  }).find(function (i) {
    return s.location.pathname.startsWith(i.activePath || i.link);
  });
  return (item === null || item === void 0 ? void 0 : item.activePath) || (item === null || item === void 0 ? void 0 : item.link) || '';
};

/**
 * toc 锚点选择器
 * @param s
 */
export var tocAnchorItemSel = function tocAnchorItemSel(s) {
  var _s$tabMeta, _s$tabMeta2;
  var _s$routeMeta = s.routeMeta,
    toc = _s$routeMeta.toc,
    frontmatter = _s$routeMeta.frontmatter;
  if ((_s$tabMeta = s.tabMeta) !== null && _s$tabMeta !== void 0 && _s$tabMeta.toc) toc = s.tabMeta.toc;
  if ((_s$tabMeta2 = s.tabMeta) !== null && _s$tabMeta2 !== void 0 && _s$tabMeta2.frontmatter) frontmatter = s.tabMeta.frontmatter;
  return toc.reduce(function (result, item) {
    var shouldKeepWith = function shouldKeepWith(depth) {
      if (!frontmatter.tocDepth) return true;
      if (typeof frontmatter.tocDepth === 'number' && frontmatter.tocDepth > depth - 1) return true;
    };
    if (item.depth === 2 && shouldKeepWith(2)) {
      result.push(_objectSpread({}, item));
    } else if (item.depth === 3 && shouldKeepWith(3)) {
      var parent = result[result.length - 1];
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(_objectSpread({}, item));
      }
    }
    return result;
  }, []);
};

/**
 * 将 sidebar 信息扁平化
 * @param s
 */
export var flattenSidebarSel = function flattenSidebarSel(s) {
  var _s$sidebar;
  return ((_s$sidebar = s.sidebar) === null || _s$sidebar === void 0 ? void 0 : _s$sidebar.map(function (i) {
    return i.children;
  }).flat()) || [];
};
export var contentBottomSel = function contentBottomSel(s) {
  var dataFlatten = flattenSidebarSel(s);
  var path = s.location.pathname;
  var currentIndex = dataFlatten.findIndex(function (item) {
    return item.link === path;
  });
  return {
    prev: dataFlatten[currentIndex - 1],
    currentIndex: currentIndex,
    next: dataFlatten[currentIndex + 1]
  };
};