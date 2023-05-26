import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { generateAssociatedColors } from "./colorRelationship";
import { generateColorPalette, generateNeutralPalette } from "./paletteGenerator";
var defaultRelationship = function defaultRelationship(type) {
  var _ref;
  var key = type.toUpperCase()[0] + type.slice(1);
  return _ref = {}, _defineProperty(_ref, "color".concat(key, "Bg"), 1), _defineProperty(_ref, "color".concat(key, "BgHover"), 2), _defineProperty(_ref, "color".concat(key, "Border"), 3), _defineProperty(_ref, "color".concat(key, "BorderHover"), 4), _defineProperty(_ref, "color".concat(key, "Hover"), 5), _defineProperty(_ref, "color".concat(key), 6), _defineProperty(_ref, "color".concat(key, "Active"), 7), _defineProperty(_ref, "color".concat(key, "TextHover"), 8), _defineProperty(_ref, "color".concat(key, "Text"), 9), _defineProperty(_ref, "color".concat(key, "TextActive"), 10), _ref;
};
export var genMapTokenAlgorithm = function genMapTokenAlgorithm(params) {
  var _ref2 = params || {},
    _ref2$relationship = _ref2.relationship,
    relationship = _ref2$relationship === void 0 ? defaultRelationship : _ref2$relationship,
    _ref2$infoColorFollow = _ref2.infoColorFollowPrimary,
    infoColorFollowPrimary = _ref2$infoColorFollow === void 0 ? false : _ref2$infoColorFollow,
    adjustWarning = _ref2.adjustWarning,
    _ref2$brandColor = _ref2.brandColor,
    brandColor = _ref2$brandColor === void 0 ? '#1677FF' : _ref2$brandColor;
  var funcColors = generateAssociatedColors(brandColor, adjustWarning);
  var seedColors = _objectSpread(_objectSpread({
    primary: brandColor
  }, funcColors), params === null || params === void 0 ? void 0 : params.seedColors);
  if (infoColorFollowPrimary) {
    seedColors.info = brandColor;
  }
  var palettes = {
    primary: generateColorPalette(seedColors.primary, params).map(function (color) {
      return color.hex;
    }),
    error: generateColorPalette(seedColors.error, params).map(function (c) {
      return c.hex;
    }),
    warning: generateColorPalette(seedColors.warning, params).map(function (c) {
      return c.hex;
    }),
    success: generateColorPalette(seedColors.success, params).map(function (c) {
      return c.hex;
    }),
    info: generateColorPalette(seedColors.info, params).map(function (color) {
      return color.hex;
    }),
    neutral: generateNeutralPalette(seedColors.primary, _objectSpread(_objectSpread({}, params), {}, {
      neutral: true
    })).map(function (c) {
      return c.hex;
    }),
    grey: generateNeutralPalette(seedColors.primary, params).map(function (c) {
      return c.hex;
    })
  };
  var tokens = {};
  var types = ['primary', 'error', 'warning', 'success', 'info'];
  types.forEach(function (type) {
    Object.entries(relationship(type)).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      tokens[key] = palettes[type][value];
    });
  });
  return {
    palettes: palettes,
    tokens: tokens
  };
};