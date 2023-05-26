import { rgba } from 'polished';
export var createCustomToken = function createCustomToken(_ref) {
  var isDarkMode = _ref.isDarkMode,
    token = _ref.token;
  var gradientColor1 = token.blue;
  var gradientColor2 = isDarkMode ? token.pink : token.cyan;
  var gradientColor3 = token.purple;
  var colorSolid = isDarkMode ? token.colorWhite : '#000';
  return {
    headerHeight: 64,
    footerHeight: 300,
    sidebarWidth: 240,
    tocWidth: 176,
    contentMaxWidth: 1152,
    fontFamilyHighlighter: "'Fira Code', 'Fira Mono', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
    colorSolid: colorSolid,
    gradientColor1: gradientColor1,
    gradientColor2: gradientColor2,
    gradientColor3: gradientColor3,
    gradientHeroBgG: "radial-gradient(at 80% 20%, ".concat(gradientColor1, " 0%, ").concat(gradientColor2, " 80%, ").concat(gradientColor3, " 130%)"),
    gradientIconDefault: "radial-gradient(\n        100% 100% at 50% 0,\n        ".concat(rgba(colorSolid, isDarkMode ? 0.2 : 0.2), " 0,\n        ").concat(rgba(colorSolid, isDarkMode ? 0.1 : 0.4), " 100%\n      )"),
    demoInheritSiteTheme: false
  };
};