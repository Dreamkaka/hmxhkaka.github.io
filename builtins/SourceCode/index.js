import { ThemeProvider } from "../../components/DumiSiteProvider";
import { Highlighter } from "../../components/Highlighter";
import { useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
var SourceCode = function SourceCode(_ref) {
  var children = _ref.children,
    lang = _ref.lang;
  var theme = useSiteStore(function (s) {
    return s.siteData.themeConfig.syntaxTheme;
  });
  return /*#__PURE__*/_jsx(ThemeProvider, {
    children: /*#__PURE__*/_jsx(Highlighter, {
      syntaxThemes: theme,
      language: lang,
      children: children
    })
  });
};
export default SourceCode;