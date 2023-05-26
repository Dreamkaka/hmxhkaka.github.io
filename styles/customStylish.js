import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
import { rgba } from 'polished';
export var getCustomStylish = function getCustomStylish(_ref) {
  var css = _ref.css,
    token = _ref.token,
    isDarkMode = _ref.isDarkMode;
  return {
    clickableText: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      cursor: pointer;\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n    "])), token.colorTextSecondary, token.colorText),
    resetLinkColor: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      color: inherit;\n\n      &:hover,\n      &:active {\n        color: inherit;\n      }\n    "]))),
    heroButtonGradient: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background: linear-gradient(90deg, ", " 0%, ", " 100%);\n    "])), token.gradientColor1, token.gradientColor2),
    heroGradient: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-image: ", ";\n      background-size: 300% 300%;\n    "])), token.gradientHeroBgG),
    heroGradientFlow: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      animation: flow 5s ease infinite;\n\n      @keyframes flow {\n        0% {\n          background-position: 0 0;\n        }\n\n        50% {\n          background-position: 100% 100%;\n        }\n\n        100% {\n          background-position: 0 0;\n        }\n      }\n    "]))),
    heroTextShadow: css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      will-change: transform;\n\n      text-shadow: 0 8px 20px ", ",\n        0 8px 60px ", ",\n        0 8px 80px ", ";\n    "])), rgba(token.gradientColor2, 0.2), rgba(token.gradientColor3, 0.2), rgba(token.cyan, isDarkMode ? 0.2 : 0.4)),
    heroBlurBall: css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      filter: blur(69px);\n      will-change: transform;\n      background: linear-gradient(\n        135deg,\n        ", " 0%,\n        ", " 30%,\n        ", " 70%,\n        ", " 100%\n      );\n      background-size: 200% 200%;\n      animation: glow 10s ease infinite;\n\n      @keyframes glow {\n        0% {\n          background-position: 0 -100%;\n        }\n\n        50% {\n          background-position: 200% 50%;\n        }\n\n        100% {\n          background-position: 0 -100%;\n        }\n      }\n    "])), token.gradientColor3, token.gradientColor1, token.red, token.cyan),
    iconGradientDefault: css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      radial-gradient(\n        100% 100% at 50% 0,\n        ", " 0,\n        ", " 100%\n      )"])), rgba(token.colorSolid, 0.2), rgba(token.colorSolid, 0.1)),
    blur: css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      backdrop-filter: blur(7px);\n      // background: ", ";\n    "])), rgba(token.colorBgBase, 0.5))
  };
};