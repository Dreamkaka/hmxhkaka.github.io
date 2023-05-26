import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Center, Flexbox } from 'react-layout-kit';
import { Radio } from 'antd';
import { darkColorPalettes } from "../../styles/theme/dark";
import { lightColorPalettes } from "../../styles/theme/light";
import ColorPalette from "./ColorPalette";
import { useStore } from "./store";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var lightColorMaps = Object.entries(lightColorPalettes).map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  return {
    key: key,
    colors: value
  };
});
var darkColorMaps = Object.entries(darkColorPalettes).map(function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    key = _ref4[0],
    value = _ref4[1];
  return {
    key: key,
    colors: value
  };
});
export default (function () {
  var _useStore = useStore(),
    mode = _useStore.mode;
  return /*#__PURE__*/_jsxs(Flexbox, {
    children: [/*#__PURE__*/_jsxs(Flexbox, {
      align: 'center',
      horizontal: true,
      gap: 12,
      style: {
        marginBottom: 8,
        alignSelf: 'end'
      },
      children: ["\u8272\u5F69\u6A21\u578B", /*#__PURE__*/_jsx(Radio.Group, {
        value: mode,
        options: [{
          label: 'OKLCH',
          value: 'oklch'
        }, {
          label: 'HEX',
          value: 'hex'
        }, {
          label: 'HSL',
          value: 'hsl'
        }, {
          label: 'HSV',
          value: 'hsv'
        }],
        onChange: function onChange(e) {
          useStore.setState({
            mode: e.target.value
          });
        }
      })]
    }), /*#__PURE__*/_jsx(Center, {
      padding: 24,
      style: {
        background: '#fafafa'
      },
      children: /*#__PURE__*/_jsx(ColorPalette, {
        palette: lightColorMaps
      })
    }), /*#__PURE__*/_jsx(Center, {
      padding: 24,
      style: {
        background: '#000'
      },
      children: /*#__PURE__*/_jsx(ColorPalette, {
        palette: darkColorMaps
      })
    })]
  });
});