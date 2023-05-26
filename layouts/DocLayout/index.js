import { extractStaticStyle } from 'antd-style';
import { Helmet, useIntl, useLocation } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import DumiSiteProvider from "../../components/DumiSiteProvider";
import { StoreUpdater } from "../../components/StoreUpdater";
import Docs from "../../pages/Docs";
import Home from "../../pages/Home";
import { isHeroPageSel, tokenSel, useSiteStore } from "../../store";
import { GlobalStyle } from "./styles";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var DocLayout = /*#__PURE__*/memo(function () {
  var intl = useIntl();
  var _useLocation = useLocation(),
    hash = _useLocation.hash;
  var fm = useSiteStore(function (s) {
    return s.routeMeta.frontmatter;
  }, isEqual);
  var isHomePage = useSiteStore(isHeroPageSel);
  var loading = useSiteStore(function (s) {
    return s.siteData.loading;
  });

  // handle hash change or visit page hash after async chunk loaded
  useEffect(function () {
    var id = hash.replace('#', '');
    if (id) {
      setTimeout(function () {
        var elm = document.getElementById(decodeURIComponent(id));
        if (elm) {
          elm.scrollIntoView();
          window.scrollBy({
            top: -80
          });
        }
      }, 1);
    }
  }, [loading, hash]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs(Helmet, {
      children: [/*#__PURE__*/_jsx("html", {
        lang: intl.locale.replace(/-.+$/, '')
      }), fm.title && /*#__PURE__*/_jsx("meta", {
        property: "og:title",
        content: fm.title
      }), fm.description && /*#__PURE__*/_jsx("meta", {
        name: "description",
        content: fm.description
      }), fm.description && /*#__PURE__*/_jsx("meta", {
        property: "og:description",
        content: fm.description
      }), fm.keywords && /*#__PURE__*/_jsx("meta", {
        name: "keywords",
        content: fm.keywords.join(',')
      }), fm.keywords && /*#__PURE__*/_jsx("meta", {
        property: "og:keywords",
        content: fm.keywords.join(',')
      })]
    }), isHomePage ? /*#__PURE__*/_jsx(Home, {}) : /*#__PURE__*/_jsx(Docs, {})]
  });
});

// @ts-ignore
global.__ANTD_CACHE__ = extractStaticStyle.cache;
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  var siteToken = useSiteStore(tokenSel, isEqual);
  return /*#__PURE__*/_jsx(DumiSiteProvider, {
    cache: extractStaticStyle.cache,
    token: siteToken,
    children: children
  });
};
export default (function () {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(StoreUpdater, {}), /*#__PURE__*/_jsxs(ThemeProvider, {
      children: [/*#__PURE__*/_jsx(GlobalStyle, {}), /*#__PURE__*/_jsx(DocLayout, {})]
    })]
  });
});