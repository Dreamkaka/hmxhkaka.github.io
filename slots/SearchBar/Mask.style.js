import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    css = _ref.css;
  return {
    modal: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      position: fixed;\n      top: 0;\n      inset-inline-start: 0;\n      z-index: 1000;\n      width: 100vw;\n      height: 100vh;\n      display: flex;\n      justify-content: center;\n    "]))),
    mask: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      width: 100%;\n      height: 100%;\n    "])), token.colorBgMask),
    content: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      position: absolute;\n      top: 60px;\n      background-color: ", ";\n      width: 500px;\n      padding: 12px;\n      box-sizing: border-box;\n      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;\n      border-radius: 8px;\n      max-height: calc(100% - 120px);\n      display: flex;\n      flex-direction: column;\n    "])), token.colorBgElevated)
  };
});