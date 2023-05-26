import { EditOutlined, GithubFilled } from '@ant-design/icons';
import { Divider, Space, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Code from "../CodeSnippet";
import { useStyles } from "./style";

/**
 * @title API 标题属性
 * @extends ApiHeaderProps
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export var ApiHeader = /*#__PURE__*/memo(function (_ref) {
  var title = _ref.title,
    componentName = _ref.componentName,
    description = _ref.description,
    defaultImport = _ref.defaultImport,
    pkg = _ref.pkg,
    sourceUrl = _ref.sourceUrl,
    docUrl = _ref.docUrl,
    _ref$serviceList = _ref.serviceList,
    serviceList = _ref$serviceList === void 0 ? [] : _ref$serviceList;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var items = [sourceUrl && {
    icon: /*#__PURE__*/_jsx(GithubFilled, {}),
    children: '查看源码',
    url: sourceUrl
  }, docUrl && {
    icon: /*#__PURE__*/_jsx(EditOutlined, {}),
    children: '编辑文档',
    url: docUrl
  }].filter(function (i) {
    return i;
  });
  var importStr = defaultImport ? "import ".concat(componentName, " from '").concat(pkg, "';") : "import { ".concat(componentName, " } from '").concat(pkg, "';");
  return /*#__PURE__*/_jsxs(Flexbox, {
    children: [/*#__PURE__*/_jsx(Typography.Title, {
      className: styles.title,
      children: title
    }), description && /*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsx(Typography.Text, {
        type: 'secondary',
        className: styles.desc,
        children: description
      })
    }), /*#__PURE__*/_jsxs(Flexbox, {
      style: {
        marginTop: 16
      },
      gap: mobile ? 16 : 24,
      children: [/*#__PURE__*/_jsxs(Flexbox, {
        horizontal: !mobile,
        gap: mobile ? 12 : 0,
        children: [/*#__PURE__*/_jsx(Typography.Text, {
          className: styles.label,
          type: 'secondary',
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: "\u5F15\u5165\u65B9\u6CD5"
        }), /*#__PURE__*/_jsx(Code, {
          children: importStr
        })]
      }), /*#__PURE__*/_jsx(Divider, {
        dashed: true,
        style: {
          margin: '2px 0'
        }
      }), /*#__PURE__*/_jsxs(Flexbox, {
        horizontal: !mobile,
        gap: mobile ? 24 : 0,
        distribution: 'space-between',
        children: [/*#__PURE__*/_jsx(Space, {
          split: /*#__PURE__*/_jsx(Divider, {
            type: 'vertical'
          }),
          wrap: true,
          children: serviceList.map(function (item) {
            return /*#__PURE__*/_jsx("a", {
              href: item.url,
              target: '_blank',
              rel: "noreferrer",
              title: item.label,
              children: /*#__PURE__*/_jsxs(Flexbox, {
                horizontal: true,
                align: 'center',
                gap: 8,
                className: styles.text,
                children: [/*#__PURE__*/_jsx(_Fragment, {
                  children: item.icon
                }), /*#__PURE__*/_jsx(_Fragment, {
                  children: item.children
                })]
              })
            }, item.label);
          })
        }), /*#__PURE__*/_jsx(Space, {
          split: /*#__PURE__*/_jsx(Divider, {
            type: 'vertical'
          }),
          className: styles.meta,
          children: items.map(function (item) {
            return /*#__PURE__*/_jsx("a", {
              href: item.url,
              target: '_blank',
              rel: "noreferrer",
              children: /*#__PURE__*/_jsxs(Flexbox, {
                horizontal: true,
                align: 'center',
                gap: 8,
                className: styles.text,
                children: [/*#__PURE__*/_jsx(_Fragment, {
                  children: item.icon
                }), /*#__PURE__*/_jsx(_Fragment, {
                  children: item.children
                })]
              })
            }, item.url);
          })
        })]
      })]
    })]
  });
});