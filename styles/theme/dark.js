import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { theme } from 'antd';
import { genMapTokenAlgorithm } from "../algorithms";
var cyanColors = ['rgba(0, 225, 242, 0.12)', 'rgba(0, 232, 245, 0.22)', 'rgba(0, 237, 250, 0.32)', 'rgba(0, 243, 255, 0.42)', 'rgba(0, 247, 255, 0.53)', 'rgba(0, 246, 254, 0.65)', 'rgba(0, 247, 253, 0.77)', 'rgba(0, 245, 255, 0.75)', 'rgba(0, 244, 255, 0.73)', 'rgba(0, 239, 253, 0.72)', 'rgba(0, 237, 253, 0.7)'];
var darkModeRelationship = function darkModeRelationship(type) {
  var _ref;
  var key = type.toUpperCase()[0] + type.slice(1);
  return _ref = {}, _defineProperty(_ref, "color".concat(key, "Bg"), 1), _defineProperty(_ref, "color".concat(key, "BgHover"), 2), _defineProperty(_ref, "color".concat(key, "Border"), 3), _defineProperty(_ref, "color".concat(key, "BorderHover"), 4), _defineProperty(_ref, "color".concat(key, "Hover"), 7), _defineProperty(_ref, "color".concat(key), 6), _defineProperty(_ref, "color".concat(key, "Active"), 5), _defineProperty(_ref, "color".concat(key, "TextHover"), 8), _defineProperty(_ref, "color".concat(key, "Text"), 9), _defineProperty(_ref, "color".concat(key, "TextActive"), 10), _ref;
};
var darkMode = genMapTokenAlgorithm({
  lighter: {
    steps: 4,
    // 减少较亮颜色的数量
    targetBrightness: 0.8,
    // 降低最大亮度值
    saturationAdjustment: 0.6 // 减小较亮颜色的饱和度调整
    // saturationScale: 1,
  },

  darker: {
    steps: 6,
    // 增加较暗颜色的数量
    targetBrightness: 0.2,
    // 降低最小亮度值
    saturationAdjustment: 0.4,
    // 增加较暗颜色的饱和度调整
    hueAdjustment: 1,
    // 保持暗色调的色相调整因子
    saturationScale: 1
  },
  reverse: true,
  relationship: darkModeRelationship
});
export var darkColorPalettes = darkMode.palettes;
var darkAlgorithm = function darkAlgorithm(seedToken, mapToken) {
  return _objectSpread(_objectSpread(_objectSpread({}, theme.darkAlgorithm(seedToken, mapToken)), darkMode.tokens), {}, {
    'cyan-1': cyanColors[1],
    'cyan-2': cyanColors[2],
    'cyan-3': cyanColors[3],
    'cyan-4': cyanColors[4],
    'cyan-5': cyanColors[5],
    'cyan-6': cyanColors[6],
    'cyan-7': cyanColors[7],
    'cyan-8': cyanColors[8],
    'cyan-9': cyanColors[9],
    'cyan-10': cyanColors[10]
  });
};
export var darkTheme = {
  token: {
    // colorTextBase: '#c7ddff',
    colorTextBase: '#dcdcf2',
    colorBgBase: '#050608',
    colorLinkHover: darkColorPalettes.primary[7],
    colorLink: darkColorPalettes.primary[6],
    colorLinkActive: darkColorPalettes.primary[5]
  },
  algorithm: darkAlgorithm
};