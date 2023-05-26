import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import { createStyles } from 'antd-style';
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    prefixCls = _ref.prefixCls,
    css = _ref.css;
  // 把首字母大写
  var toCamelCase = function toCamelCase(str) {
    return str.replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };
  var overwriteAlert = function overwriteAlert(type) {
    var tokens = {
      background: token["color".concat(toCamelCase(type), "Bg")],
      text: token["color".concat(toCamelCase(type), "Text")]
    };
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .", "-alert-", " {\n        background: ", ";\n\n        .", "-alert-message {\n          color: ", ";\n          font-weight: bold;\n        }\n\n        .", "-alert-description {\n          .markdown {\n            color: ", ";\n          }\n        }\n      }\n    "])), prefixCls, type, tokens.background, prefixCls, tokens.text, prefixCls, tokens.text);
  };
  return {
    container: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin: 8px 0;\n\n      ", "\n\n      ", "\n\n      ", "\n\n      ", "\n    "])), overwriteAlert('info'), overwriteAlert('warning'), overwriteAlert('success'), overwriteAlert('error')),
    alert: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border: none;\n\n      .", "-alert-message {\n        font-weight: bold;\n      }\n    "])), prefixCls),
    desc: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      p {\n        margin: 0;\n      }\n    "])))
  };
});