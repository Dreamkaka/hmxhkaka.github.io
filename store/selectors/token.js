import { merge } from 'lodash';
export var tokenSel = function tokenSel(s) {
  var fm = s.routeMeta.frontmatter;
  return merge({}, fm.token, s.siteData.themeConfig.siteToken);
};