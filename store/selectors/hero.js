export var isHeroPageSel = function isHeroPageSel(s) {
  return !!s.routeMeta.frontmatter.hero;
};
var localeValueSel = function localeValueSel(s, value) {
  if (!value) return;
  if (value[s.locale.id]) return value[s.locale.id];
  return value;
};

/**
 * Hero Title 选择器
 * 选择逻辑：优先使用 hero 配置的 title， 再兜底到 themeConfig 中的 name
 */
export var heroTitleSel = function heroTitleSel(s) {
  var _s$routeMeta$frontmat, _localeValueSel;
  return ((_s$routeMeta$frontmat = s.routeMeta.frontmatter.hero) === null || _s$routeMeta$frontmat === void 0 ? void 0 : _s$routeMeta$frontmat.title) || ( // 从 hero 的 title 中选择
  (_localeValueSel = localeValueSel(s, s.siteData.themeConfig.hero)) === null || _localeValueSel === void 0 ? void 0 : _localeValueSel.title) ||
  // @deprecated 1.0 正式版本移除
  // 从 hero 的 title 中选择
  localeValueSel(s, s.siteData.themeConfig.title) || s.siteData.themeConfig.name;
};

/**
 * Hero description 选择器
 * 选择逻辑：优先使用 hero 配置的 description， 再兜底到 themeConfig 中的 name
 */
export var heroDescSel = function heroDescSel(s) {
  var _s$routeMeta$frontmat2, _localeValueSel2;
  return ((_s$routeMeta$frontmat2 = s.routeMeta.frontmatter.hero) === null || _s$routeMeta$frontmat2 === void 0 ? void 0 : _s$routeMeta$frontmat2.description) || ( // 从 hero 的 description 中选择
  (_localeValueSel2 = localeValueSel(s, s.siteData.themeConfig.hero)) === null || _localeValueSel2 === void 0 ? void 0 : _localeValueSel2.description) ||
  // @deprecated 1.0 正式版本移除
  // 从 hero 的 description 中选择
  localeValueSel(s, s.siteData.themeConfig.description);
};

/**
 * Hero Action 选择器
 * 选择逻辑：优先使用 hero 配置的 actions， 再兜底到 themeConfig 中的 actions
 */
export var heroActionsSel = function heroActionsSel(s) {
  var _s$routeMeta$frontmat3, _localeValueSel3;
  return ((_s$routeMeta$frontmat3 = s.routeMeta.frontmatter.hero) === null || _s$routeMeta$frontmat3 === void 0 ? void 0 : _s$routeMeta$frontmat3.actions) || ( // 从 hero 的 actions 中选择
  (_localeValueSel3 = localeValueSel(s, s.siteData.themeConfig.hero)) === null || _localeValueSel3 === void 0 ? void 0 : _localeValueSel3.actions) ||
  // @deprecated 1.0 正式版本移除
  localeValueSel(s, s.siteData.themeConfig.actions);
};

/**
 * Features 选择器
 */
export var featuresSel = function featuresSel(s) {
  var _localeValueSel4;
  if (!isHeroPageSel(s)) return [];
  return ((_localeValueSel4 = localeValueSel(s, s.siteData.themeConfig.hero)) === null || _localeValueSel4 === void 0 ? void 0 : _localeValueSel4.features) ||
  // @deprecated 1.0 正式版本移除
  localeValueSel(s, s.siteData.themeConfig.features) ||
  // 在themeConfig 没有配置的话，尝试兜底到 frontmatter 中的配置
  s.routeMeta.frontmatter.features || [];
};