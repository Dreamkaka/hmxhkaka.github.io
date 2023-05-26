import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
import { createStyles } from 'antd-style';
import { lighten, rgba } from 'polished';
export var useStyles = createStyles(function (_ref, _ref2) {
  var token = _ref.token,
    prefixCls = _ref.prefixCls,
    responsive = _ref.responsive,
    css = _ref.css,
    stylish = _ref.stylish,
    isDarkMode = _ref.isDarkMode,
    cx = _ref.cx;
  var rowNum = _ref2.rowNum,
    hasLink = _ref2.hasLink;
  var prefix = "".concat(prefixCls, "-features");
  var coverCls = "".concat(prefix, "-cover");
  var descCls = "".concat(prefix, "-description");
  var titleCls = "".concat(prefix, "-title");
  var imgCls = "".concat(prefix, "-img");

  // 通过简单估计，缩放值乘以 rowNum 就可以得到合适的尺寸
  var scaleUnit = 20;

  // 尺寸工具
  var genSize = function genSize(size) {
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      width: ", "px;\n      height: ", "px;\n      font-size: ", "px;\n    "])), size, size, size * (22 / 24));
  };
  var withTransition = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      transition: all ", " ", ";\n    "])), token.motionDurationSlow, token.motionEaseInOutCirc);
  return {
    cell: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        overflow: hidden;\n      "]))),
    container: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        ", ";\n\n        z-index: 1;\n        padding: 24px;\n        border-radius: 24px;\n\n        background: linear-gradient(\n          135deg,\n          ", ",\n          ", "\n        );\n\n        position: relative;\n\n        &:hover {\n          scale: 1.03;\n\n          background: linear-gradient(\n            135deg,\n            ", ",\n            ", "\n          );\n\n          box-shadow: inset 0 0 0 1px ", ", ", ";\n\n          .", " {\n            height: ", "px;\n            width: 100%;\n            padding: 0;\n          }\n\n          .", " {\n            ", ";\n          }\n\n          .", " {\n            position: absolute;\n            visibility: hidden;\n            opacity: 0;\n          }\n\n          .", " {\n            font-size: ", "px;\n          }\n        }\n      "])), withTransition, token.colorFillContent, token.colorFillQuaternary, lighten(0.5, token.colorFillContent), lighten(0.5, token.colorFillQuaternary), token.colorBorder, token.boxShadowSecondary, coverCls, scaleUnit * rowNum, imgCls, genSize(100), descCls, titleCls, hasLink ? 14 : 20),
    title: cx(titleCls, withTransition, css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          pointer-events: none;\n          font-size: 20px;\n          line-height: ", ";\n          margin: 16px 0;\n          color: ", ";\n        "])), token.lineHeightHeading3, token.colorText)),
    desc: cx(descCls, withTransition, css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          color: ", ";\n\n          pointer-events: none;\n          quotient {\n            color: ", ";\n            display: block;\n            margin: 12px 0;\n            padding-left: 12px;\n            position: relative;\n            &:before {\n              position: absolute;\n              content: '';\n              left: 0;\n              display: block;\n              border-radius: 2px;\n              width: 4px;\n              height: 100%;\n              background: ", ";\n            }\n          }\n        "])), token.colorTextSecondary, token.colorTextDescription, isDarkMode ? token.colorPrimary : token.colorPrimaryBgHover)),
    imgContainer: cx(coverCls, withTransition, css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          background: ", ";\n          border-radius: 8px;\n          opacity: 0.8;\n\n          ", ";\n          padding: 4px;\n\n          &[image-style='primary'] {\n            background: linear-gradient(135deg, ", ", ", ");\n          }\n\n          &[image-style='light'] {\n            background: ", ";\n          }\n\n          &[image-style='soon'] {\n            opacity: 0.5;\n            background: linear-gradient(\n              135deg,\n              ", ",\n              ", " 50%,\n              ", "\n            );\n          }\n        "])), token.colorFillContent, genSize(24), token.gradientColor1, token.gradientColor2, token.colorBgContainer, rgba(token.gradientColor2, 0.3), rgba(token.gradientColor2, 0.3), rgba(token.gradientColor1, 0.3))),
    img: cx(imgCls, withTransition, css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          ", ";\n          color: ", ";\n        "])), genSize(20), token.colorWhite)),
    link: css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        ", ";\n\n        margin-top: 24px;\n\n        a {\n          ", ";\n\n          color: ", ";\n          &:hover {\n            color: ", ";\n          }\n        }\n      "])), withTransition, stylish.resetLinkColor, token.colorTextDescription, token.colorPrimaryHover),
    blur: css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        pointer-events: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        ", ";\n        scale: 2;\n        opacity: ", ";\n        ", " {\n          display: none;\n        }\n      "])), stylish.heroBlurBall, isDarkMode ? 0.05 : 0.08, responsive.mobile)
  };
});