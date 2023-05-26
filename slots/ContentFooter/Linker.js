import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'dumi';
import { memo, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStyles } from "./Linker.style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Linker = function Linker(_ref) {
  var title = _ref.title,
    link = _ref.link,
    type = _ref.type;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var navContent = useMemo(function () {
    switch (type) {
      case 'prev':
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(ArrowLeftOutlined, {}), " \u4E0A\u4E00\u7BC7"]
        });
      case 'next':
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: ["\u4E0B\u4E00\u7BC7 ", /*#__PURE__*/_jsx(ArrowRightOutlined, {})]
        });
    }
  }, [type]);
  return /*#__PURE__*/_jsx(Link, {
    to: link,
    children: /*#__PURE__*/_jsxs(Flexbox, {
      className: styles.container,
      gap: 8,
      children: [/*#__PURE__*/_jsx(Flexbox, {
        horizontal: true,
        gap: 4,
        className: cx(styles.nav, type === 'next' && styles.alignmentEnd),
        children: navContent
      }), /*#__PURE__*/_jsx(Flexbox, {
        horizontal: true,
        className: cx(styles.title, type === 'next' && styles.alignmentEnd),
        children: title
      })]
    })
  });
};
export default /*#__PURE__*/memo(Linker);