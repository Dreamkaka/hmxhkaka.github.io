import { Button, ConfigProvider } from 'antd';
import { Link } from 'dumi';
import { Center, Flexbox } from 'react-layout-kit';
import HeroButton from "./HeroButton";
import { useStyles } from "./style";

/**
 * @title 头图组件属性
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Hero = function Hero(_ref) {
  var title = _ref.title,
    description = _ref.description,
    actions = _ref.actions;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  return /*#__PURE__*/_jsxs(Flexbox, {
    horizontal: true,
    distribution: 'center',
    className: styles.container,
    children: [/*#__PURE__*/_jsx("div", {
      className: styles.canvas
    }), /*#__PURE__*/_jsxs(Center, {
      children: [title && /*#__PURE__*/_jsxs("div", {
        className: styles.titleContainer,
        children: [/*#__PURE__*/_jsx("h1", {
          className: styles.title,
          dangerouslySetInnerHTML: {
            __html: title
          }
        }), /*#__PURE__*/_jsx("div", {
          className: cx(styles.titleShadow),
          dangerouslySetInnerHTML: {
            __html: title
          }
        })]
      }), description && /*#__PURE__*/_jsx("p", {
        className: styles.desc,
        dangerouslySetInnerHTML: {
          __html: description
        }
      }), Boolean(actions === null || actions === void 0 ? void 0 : actions.length) && /*#__PURE__*/_jsx(ConfigProvider, {
        theme: {
          token: {
            fontSize: 16,
            controlHeight: 40
          }
        },
        children: /*#__PURE__*/_jsx(Flexbox, {
          horizontal: true,
          gap: 24,
          className: styles.actions,
          children: actions.map(function (_ref2, index) {
            var text = _ref2.text,
              link = _ref2.link,
              openExternal = _ref2.openExternal;
            return /*#__PURE__*/_jsx(Link, {
              to: link,
              target: openExternal ? '_blank' : undefined,
              rel: "noreferrer",
              children: index === 0 ? /*#__PURE__*/_jsx(HeroButton, {
                children: text
              }) : /*#__PURE__*/_jsx(Button, {
                size: 'large',
                shape: 'round',
                type: 'default',
                children: text
              })
            }, text);
          })
        })
      })]
    })]
  });
};
export default Hero;