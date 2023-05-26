import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
import styled from '@emotion/styled';
import { createStyles } from 'antd-style';
import { rgba } from 'polished';
export var FillRect = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n\n  width: 100%;\n"])), function (p) {
  return rgba(p.theme.colorBgContainer, 0.8);
});
export var useStyles = createStyles(function (_ref) {
  var token = _ref.token,
    prefixCls = _ref.prefixCls,
    cx = _ref.cx,
    css = _ref.css;
  var offset = 6;
  return {
    icon: cx('site-burger-icon', css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        position: relative;\n\n        &,\n        &::before,\n        &::after {\n          display: inline-block;\n          height: 2px;\n          background: ", ";\n\n          width: 16px;\n\n          transition: all 150ms ease;\n        }\n\n        &::before,\n        &::after {\n          position: absolute;\n          left: 0;\n\n          content: '';\n        }\n\n        &::before {\n          top: ", "px;\n        }\n\n        &::after {\n          top: -", "px;\n        }\n      "])), token.colorTextSecondary, offset, offset)),
    active: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      &::before,\n      &::after {\n        background: ", ";\n      }\n      & {\n        background: transparent;\n      }\n\n      &::before {\n        top: 0;\n        transform: rotate(-135deg);\n      }\n\n      &::after {\n        top: 0;\n        transform: rotate(135deg);\n      }\n    "])), token.colorText),
    container: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: ", "px;\n      height: ", "px;\n      border-radius: ", "px;\n      cursor: pointer;\n    "])), token.controlHeight, token.controlHeight, token.borderRadius),
    drawerRoot: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      top: ", "px;\n\n      :focus-visible {\n        outline: none;\n      }\n\n      .", "-drawer {\n        &-mask {\n          background: transparent;\n          backdrop-filter: blur(7px);\n          background: ", ";\n        }\n\n        &-content-wrapper {\n          box-shadow: none;\n        }\n      }\n    "])), token.headerHeight + 1, prefixCls, rgba(token.colorBgBase, 0.5)),
    drawer: css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      &.", "-drawer-content {\n        background: transparent;\n      }\n\n      .", "-drawer-body {\n        display: flex;\n        flex-direction: column;\n      }\n    "])), prefixCls, prefixCls),
    menu: css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      background: transparent;\n      border-inline-end: transparent !important;\n\n      > .", "-menu-item-only-child,.", "-menu-submenu-title {\n        background: ", ";\n        border-radius: 0;\n        margin: 0;\n        width: 100%;\n        &:active {\n          margin-inline: 4px;\n          border-radius: ", "px;\n        }\n      }\n\n      .", "-menu-sub.", "-menu-inline {\n        //background: transparent !important;\n        background: ", " !important;\n      }\n    "])), prefixCls, prefixCls, rgba(token.colorBgContainer, 0.8), token.borderRadius, prefixCls, prefixCls, rgba(token.colorBgContainer, 0.2))
  };
});