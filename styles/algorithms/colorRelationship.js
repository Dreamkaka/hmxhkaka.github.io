import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import chroma from 'chroma-js';
var baseColors = [{
  name: 'red',
  hue: 0
}, {
  name: 'orange',
  hue: 30
}, {
  name: 'yellow',
  hue: 60
}, {
  name: 'yellow-green',
  hue: 90
}, {
  name: 'green',
  hue: 120
}, {
  name: 'cyan-green',
  hue: 150
}, {
  name: 'cyan',
  hue: 180
}, {
  name: 'cyan-blue',
  hue: 210
}, {
  name: 'blue',
  hue: 240
}, {
  name: 'blue-violet',
  hue: 270
}, {
  name: 'violet',
  hue: 300
}, {
  name: 'red-violet',
  hue: 330
}];
var findClosestColorBase = function findClosestColorBase(hue) {
  var minDifference = 360;
  var closestColorBase = {
    name: '',
    hue: 0
  };
  baseColors.forEach(function (colorBase) {
    var hueDifference = Math.abs(hue - colorBase.hue);
    var adjustedDifference = Math.min(hueDifference, 360 - hueDifference);
    if (adjustedDifference < minDifference) {
      minDifference = adjustedDifference;
      closestColorBase = colorBase;
    }
  });
  return closestColorBase.hue;
};
export var generateAssociatedColors = function generateAssociatedColors(baseColor) {
  var adjustWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var color = chroma(baseColor);
  var _color$oklch = color.oklch(),
    _color$oklch2 = _slicedToArray(_color$oklch, 3),
    baseLightness = _color$oklch2[0],
    baseChroma = _color$oklch2[1],
    baseHue = _color$oklch2[2];
  var closestColorHue = findClosestColorBase(baseHue);

  // 计算色相偏移量
  // const hueOffset = 0;
  var hueOffset = baseHue - closestColorHue;

  // 应用色相偏移量

  var successBaseHue = 150; // 绿色基准色相值
  var errorBaseHue = 30; // 红色基准色相值
  var warningBaseHue = 90; // 黄色基准色相值
  var infoBaseHue = 255; // 蓝色基准色相值

  var successHue = (successBaseHue + hueOffset) % 360;
  var errorHue = (errorBaseHue + hueOffset) % 360;
  var warningHue = (warningBaseHue + hueOffset) % 360;
  var infoHue = (infoBaseHue + hueOffset) % 360;
  var warningLightness = adjustWarning ? 0.8 + baseLightness * 0.2 : baseLightness;
  return {
    success: chroma.oklch(baseLightness, baseChroma, successHue).hex(),
    error: chroma.oklch(baseLightness, baseChroma, errorHue).hex(),
    warning: chroma.oklch(warningLightness, baseChroma, warningHue).hex(),
    info: chroma.oklch(baseLightness, baseChroma, infoHue).hex()
  };
};