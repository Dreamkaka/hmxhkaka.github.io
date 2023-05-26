import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { githubSel } from "./siteBasicInfo";

/**
 * 判断是否需要 ApiHeader
 * @param s
 */
export var isApiPageSel = function isApiPageSel(s) {
  var _s$siteData$themeConf;
  var fm = s.routeMeta.frontmatter;
  if (s.siteData.themeConfig.apiHeader === false || fm.apiHeader === false) return false;
  if (!!fm.apiHeader) return true;
  var baseMatch = ['/api', '/components'].concat(_toConsumableArray(((_s$siteData$themeConf = s.siteData.themeConfig.apiHeader) === null || _s$siteData$themeConf === void 0 ? void 0 : _s$siteData$themeConf.match) || []));
  return baseMatch.some(function (path) {
    return s.location.pathname.startsWith(path);
  });
};
export var apiHeaderSel = function apiHeaderSel(s) {
  var _s$routeMeta, _s$locale, _s$siteData, _s$siteData$themeConf2, _s$siteData2, _s$siteData2$pkg, _fm$apiHeader, _fm$apiHeader2, _fm$apiHeader3, _fm$apiHeader4;
  var REPO_BASE = githubSel(s);
  var fm = ((_s$routeMeta = s.routeMeta) === null || _s$routeMeta === void 0 ? void 0 : _s$routeMeta.frontmatter) || {};
  var localeId = (_s$locale = s.locale) === null || _s$locale === void 0 ? void 0 : _s$locale.id;

  // 统一的路径匹配替换方法
  var replaceUrl = function replaceUrl(rawStr) {
    if (!REPO_BASE) return undefined;
    return rawStr.replace('{github}', REPO_BASE).replace('{atomId}', fm.atomId || '').replace('{title}', fm.title).replace('{locale}', localeId);
  };
  var haseUrl = function haseUrl(config) {
    if (config === false) return false;
    return typeof config === 'string';
  };
  var _ref = ((_s$siteData = s.siteData) === null || _s$siteData === void 0 ? void 0 : (_s$siteData$themeConf2 = _s$siteData.themeConfig) === null || _s$siteData$themeConf2 === void 0 ? void 0 : _s$siteData$themeConf2.apiHeader) || {},
    _ref$pkg = _ref.pkg,
    pkg = _ref$pkg === void 0 ? (_s$siteData2 = s.siteData) === null || _s$siteData2 === void 0 ? void 0 : (_s$siteData2$pkg = _s$siteData2.pkg) === null || _s$siteData2$pkg === void 0 ? void 0 : _s$siteData2$pkg.name : _ref$pkg,
    globalSourceUrl = _ref.sourceUrl,
    globalDocUrl = _ref.docUrl;

  // 1. 兜底默认使用文档的 apiHeader.pkg
  // 2. 如果 themeConfig 里配置了 pkg， 则使用配置的 pkg
  // 3. 兜底使用 package.json 中的 name
  var displayPackage = ((_fm$apiHeader = fm.apiHeader) === null || _fm$apiHeader === void 0 ? void 0 : _fm$apiHeader.pkg) || pkg;

  // 1. 默认使用文档的 fm.atomId
  // 2. 兜底到文档 title
  var componentName = fm.atomId || fm.title;

  // 1. 优先选择使用文档 apiHeader.defaultImport
  // 2. 默认使用 false
  var defaultImport = ((_fm$apiHeader2 = fm.apiHeader) === null || _fm$apiHeader2 === void 0 ? void 0 : _fm$apiHeader2.defaultImport) || false;
  var sourceUrlMatch = ((_fm$apiHeader3 = fm.apiHeader) === null || _fm$apiHeader3 === void 0 ? void 0 : _fm$apiHeader3.sourceUrl) || globalSourceUrl;
  var sourceUrl = haseUrl(sourceUrlMatch) ? replaceUrl(sourceUrlMatch) : undefined;
  var docUrlMatch = ((_fm$apiHeader4 = fm.apiHeader) === null || _fm$apiHeader4 === void 0 ? void 0 : _fm$apiHeader4.docUrl) || globalDocUrl;
  var docUrl = haseUrl(docUrlMatch) ? replaceUrl(docUrlMatch) : undefined;
  return {
    title: fm.title,
    description: fm.description,
    pkg: displayPackage,
    defaultImport: defaultImport,
    componentName: componentName,
    sourceUrl: sourceUrl,
    docUrl: docUrl
  };
};