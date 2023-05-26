/**
 * 站点标题选择器
 */
export var siteTitleSel = function siteTitleSel(s) {
  return s.siteData.themeConfig.name;
};
export var githubSel = function githubSel(s) {
  var _s$siteData$themeConf, _s$siteData$themeConf2, _s$siteData$themeConf3;
  return (
    // 优先取 socialLinks 里的 github
    // TODO: 后面的 github 在 1.0 里废弃
    ((_s$siteData$themeConf = s.siteData.themeConfig) === null || _s$siteData$themeConf === void 0 ? void 0 : (_s$siteData$themeConf2 = _s$siteData$themeConf.socialLinks) === null || _s$siteData$themeConf2 === void 0 ? void 0 : _s$siteData$themeConf2.github) || ((_s$siteData$themeConf3 = s.siteData.themeConfig) === null || _s$siteData$themeConf3 === void 0 ? void 0 : _s$siteData$themeConf3.github)
  );
};