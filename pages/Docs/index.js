import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { Helmet, useOutlet } from 'dumi';
import Content from "dumi/theme/slots/Content";
import Footer from "dumi/theme/slots/Footer";
import Header from "dumi/theme/slots/Header";
import Sidebar from "dumi/theme/slots/Sidebar";
import Toc from "dumi/theme/slots/Toc";
// @ts-ignore
import ApiHeader from "dumi/theme/slots/ApiHeader";
import { isApiPageSel, siteTitleSel, tocAnchorItemSel, useSiteStore } from "../../store";
import { useStyles } from "./styles";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var Docs = /*#__PURE__*/memo(function () {
  var outlet = useOutlet();
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var fm = useSiteStore(function (s) {
    return s.routeMeta.frontmatter;
  }, isEqual);
  var isApiPage = useSiteStore(isApiPageSel);
  var siteTitle = useSiteStore(siteTitleSel);
  var noToc = useSiteStore(function (s) {
    return tocAnchorItemSel(s).length === 0;
  });
  var hideSidebar = fm.sidebar === false;
  var hideToc = fm.toc === false || noToc;
  var _useStyles = useStyles({
      hideToc: hideToc,
      hideSidebar: hideSidebar
    }),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  return /*#__PURE__*/_jsxs("div", {
    className: styles.layout,
    children: [/*#__PURE__*/_jsx(Helmet, {
      children: fm.title && /*#__PURE__*/_jsxs("title", {
        children: [fm.title, " - ", siteTitle]
      })
    }), /*#__PURE__*/_jsx(Header, {}), hideToc ? null : /*#__PURE__*/_jsx(Toc, {}), mobile || hideSidebar ? null : /*#__PURE__*/_jsx(Sidebar, {}), isApiPage ? /*#__PURE__*/_jsx(Flexbox, {
      style: {
        gridArea: 'title',
        paddingBlock: mobile ? 24 : undefined
      },
      children: /*#__PURE__*/_jsx(Center, {
        children: /*#__PURE__*/_jsx(Flexbox, {
          style: {
            maxWidth: theme.contentMaxWidth,
            width: '100%'
          },
          children: /*#__PURE__*/_jsx(Flexbox, {
            style: {
              paddingBlock: 0,
              paddingInline: mobile ? 16 : 48
            },
            children: /*#__PURE__*/_jsx(ApiHeader, {})
          })
        })
      })
    }) : null, /*#__PURE__*/_jsx(Flexbox, {
      style: {
        zIndex: 10,
        gridArea: 'main',
        margin: mobile ? 0 : 24,
        marginBottom: mobile ? 0 : 48
      },
      children: /*#__PURE__*/_jsx(Center, {
        width: '100%',
        children: /*#__PURE__*/_jsx(Flexbox, {
          className: styles.content,
          children: /*#__PURE__*/_jsx(Flexbox, {
            horizontal: true,
            children: /*#__PURE__*/_jsx(Content, {
              children: outlet
            })
          })
        })
      })
    }), /*#__PURE__*/_jsx(Footer, {})]
  });
});
export default Docs;