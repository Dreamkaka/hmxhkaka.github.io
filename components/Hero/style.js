import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    responsive = _ref.responsive,
    token = _ref.token,
    stylish = _ref.stylish,
    isDarkMode = _ref.isDarkMode;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    text-align: center;\n    box-sizing: border-box;\n\n    + * {\n      position: relative;\n    }\n\n    > p {\n      margin: 32px;\n      color: ", ";\n      font-size: 20px;\n      line-height: 1.6;\n\n      ", "\n    }\n  "])), token.colorTextSecondary, responsive({
      mobile: {
        fontSize: 16
      }
    })),
    titleContainer: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n  "]))),
    title: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: 68px;\n    z-index: 10;\n    color: transparent;\n    margin: 0;\n    font-family: AliPuHui, ", ";\n\n    ", "\n\n    b {\n      position: relative;\n      z-index: 5;\n      ", ";\n      ", "\n\n      background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n  "])), token.fontFamily, responsive({
      mobile: {
        fontSize: 40
      }
    }), stylish.heroGradient, stylish.heroGradientFlow),
    titleShadow: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 0;\n    color: ", ";\n\n    top: 0;\n    left: 0;\n    font-size: 68px;\n    font-family: AliPuHui, ", ";\n    font-weight: bold;\n    ", "\n\n    ", "\n\n    b {\n      color: transparent;\n    }\n  "])), isDarkMode ? token.colorWhite : token.colorTextBase, token.fontFamily, responsive({
      mobile: {
        fontSize: 40
      }
    }), stylish.heroTextShadow),
    desc: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size: ", "px;\n    color: ", ";\n\n    ", " {\n      font-size: ", "px;\n      margin: 24px 16px;\n    }\n  "])), token.fontSizeHeading3, token.colorTextSecondary, responsive.mobile, token.fontSizeHeading5),
    actions: css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-top: 48px;\n    display: flex;\n    justify-content: center;\n\n    ", "\n  "])), responsive({
      mobile: {
        marginTop: 24
      }
    })),
    canvas: css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    z-index: 10;\n    pointer-events: none;\n    position: absolute;\n    top: -250px;\n    left: 50%;\n    transform: translateX(-50%) scale(1.5);\n    width: 600px;\n    height: 400px;\n    opacity: 0.2;\n    ", "\n\n    ", " {\n      width: 200px;\n      height: 300px;\n    }\n  "])), stylish.heroBlurBall, responsive.mobile)
  };
});