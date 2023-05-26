import { Helmet } from 'dumi';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Features from "dumi/theme/slots/Features";
import Footer from "dumi/theme/slots/Footer";
import Header from "dumi/theme/slots/Header";
import Hero from "dumi/theme/slots/Hero";
import { siteTitleSel, useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var Home = /*#__PURE__*/memo(function () {
  var siteTitle = useSiteStore(siteTitleSel);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Helmet, {
      children: /*#__PURE__*/_jsx("title", {
        children: siteTitle
      })
    }), /*#__PURE__*/_jsxs(Flexbox, {
      align: 'center',
      gap: 80,
      children: [/*#__PURE__*/_jsx(Header, {}), /*#__PURE__*/_jsx(Hero, {}), /*#__PURE__*/_jsx(Features, {}), /*#__PURE__*/_jsx(Footer, {})]
    })]
  });
});
export default Home;