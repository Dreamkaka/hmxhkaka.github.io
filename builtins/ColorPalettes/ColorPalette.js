import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import { createStyles } from 'antd-style';
import { Flexbox } from 'react-layout-kit';
import chroma from 'chroma-js';
import { useStore } from "./store";
import { useMemo } from 'react';
import { invertColor } from "./invertColor";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css;
  return {
    title: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 32px;\n  "]))),
    palette: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-radius: 6px;\n    overflow: hidden;\n  "]))),
    color: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    height: 40px;\n    font-family: Monaco, Consolas, 'Courier New', monospace;\n  "])))
  };
});
var ColorItem = function ColorItem(_ref2) {
  var color = _ref2.color,
    index = _ref2.index;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var _useStore = useStore(),
    mode = _useStore.mode;
  var colorValue = useMemo(function () {
    var safeFixed = function safeFixed(num) {
      return isNaN(num) ? '/' : num.toFixed(0);
    };
    switch (mode) {
      case 'hex':
        return color;
      case 'oklch':
        // eslint-disable-next-line no-case-declarations
        var _chroma$oklch = chroma(color).oklch(),
          _chroma$oklch2 = _slicedToArray(_chroma$oklch, 3),
          light = _chroma$oklch2[0],
          ch = _chroma$oklch2[1],
          hue = _chroma$oklch2[2];
        return "".concat(safeFixed(light * 100), ",").concat(safeFixed(ch * 100), ",").concat(safeFixed(hue));
      case 'hsl':
        // eslint-disable-next-line no-case-declarations
        var hsl = chroma(color).hsl();
        return "".concat(safeFixed(hsl[0]), ",").concat(safeFixed(hsl[1] * 100), "%,").concat(safeFixed(hsl[2] * 100), "%");
      case 'hsv':
        // eslint-disable-next-line no-case-declarations
        var hsv = chroma(color).hsv();
        return "".concat(safeFixed(hsv[0]), ",").concat(safeFixed(hsv[1] * 100), "%,").concat(safeFixed(hsv[2] * 100), "%");
    }
  }, [mode, color]);
  return /*#__PURE__*/_jsxs(Flexbox, {
    horizontal: true,
    align: 'center',
    gap: 24,
    distribution: 'space-between',
    style: {
      background: color,
      color: invertColor(color)
    },
    className: styles.color,
    width: 160,
    children: [/*#__PURE__*/_jsx(Flexbox, {
      style: {
        paddingLeft: 8
      },
      children: index
    }), /*#__PURE__*/_jsx(Flexbox, {
      style: {
        paddingRight: 12
      },
      children: colorValue
    })]
  });
};
var ColorPalette = function ColorPalette(_ref3) {
  var palette = _ref3.palette;
  var _useStyles2 = useStyles(),
    styles = _useStyles2.styles;
  return /*#__PURE__*/_jsx(Flexbox, {
    horizontal: true,
    gap: 12,
    children: palette.map(function (map) {
      return /*#__PURE__*/_jsxs(Flexbox, {
        width: 160,
        align: 'center',
        children: [/*#__PURE__*/_jsx("div", {
          className: styles.title,
          style: {
            color: map.colors[6]
          },
          children: map.key
        }), /*#__PURE__*/_jsx(Flexbox, {
          className: styles.palette,
          children: map.colors.map(function (hex, index) {
            return /*#__PURE__*/_jsx(ColorItem, {
              index: index,
              color: hex
            }, hex);
          })
        })]
      }, map.key);
    })
  });
};
export default ColorPalette;