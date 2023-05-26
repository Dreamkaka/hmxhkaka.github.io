import { ArrowRightOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { history, Link } from 'dumi';
import { Center, Flexbox } from 'react-layout-kit';
import { useStyles } from "./Item.style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Image = function Image(_ref) {
  var image = _ref.image,
    className = _ref.className,
    title = _ref.title;
  return image.startsWith('http') ? /*#__PURE__*/_jsx("img", {
    className: className,
    src: image,
    alt: title
  }) : /*#__PURE__*/_jsx(Center, {
    className: className,
    children: image
  });
};
var FeatureItem = function FeatureItem(_ref2) {
  var imageType = _ref2.imageType,
    row = _ref2.row,
    column = _ref2.column,
    hero = _ref2.hero,
    description = _ref2.description,
    image = _ref2.image,
    title = _ref2.title,
    link = _ref2.link,
    imageStyle = _ref2.imageStyle,
    openExternal = _ref2.openExternal;
  var rowNum = row || 7;
  var _useStyles = useStyles({
      rowNum: rowNum,
      hasLink: !!link
    }),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  return /*#__PURE__*/_jsxs("div", {
    className: styles.container,
    style: {
      gridRow: "span ".concat(rowNum),
      gridColumn: "span ".concat(column || 1),
      cursor: link ? 'pointer' : 'default'
    },
    onClick: function onClick() {
      if (!link) return;
      if (openExternal) {
        window.open(link);
      } else {
        history.push(link);
      }
    },
    children: [/*#__PURE__*/_jsxs("div", {
      className: styles.cell,
      children: [image && /*#__PURE__*/_jsx(Center, {
        "image-style": imageType,
        className: styles.imgContainer,
        style: imageStyle,
        children: /*#__PURE__*/_jsx(Image, {
          className: styles.img,
          image: image,
          title: title
        })
      }), title && /*#__PURE__*/_jsxs(Flexbox, {
        as: 'h3',
        horizontal: true,
        gap: 8,
        align: 'center',
        className: styles.title,
        children: [title, imageType === 'soon' ? /*#__PURE__*/_jsx(Tag, {
          color: theme.isDarkMode ? 'pink-inverse' : 'cyan-inverse'
          // style={{ border: 'none' }}
          ,
          children: "SOON"
        }) : null]
      }), description && /*#__PURE__*/_jsx("p", {
        dangerouslySetInnerHTML: {
          __html: description
        },
        className: styles.desc
      }), link && /*#__PURE__*/_jsx("div", {
        className: styles.link,
        children: /*#__PURE__*/_jsxs(Link, {
          to: link,
          children: ["\u7ACB\u5373\u4E86\u89E3 ", /*#__PURE__*/_jsx(ArrowRightOutlined, {})]
        })
      })]
    }), hero && /*#__PURE__*/_jsx("div", {
      className: styles.blur
    })]
  });
};
export default FeatureItem;