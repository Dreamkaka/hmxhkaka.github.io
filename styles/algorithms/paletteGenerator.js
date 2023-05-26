import chroma from 'chroma-js';
import { merge } from 'lodash';
var defaultLight = {
  steps: 6,
  targetBrightness: 0.98,
  saturationAdjustment: 0.4,
  saturationScale: 1.6,
  hueAdjustment: 1
};
var defaultDark = {
  steps: 4,
  targetBrightness: 0.3,
  saturationAdjustment: 0.6,
  saturationScale: 1.6,
  hueAdjustment: 1.03
};

// 生成 OKLCH 色板
export var generateColorPalette = function generateColorPalette(baseColorHex) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var lighter = merge({}, defaultLight, options.lighter);
  var darker = merge({}, defaultDark, options.darker);
  var baseColor = chroma(baseColorHex);
  var baseColorOKLCH = baseColor.oklch();
  var colorPalette = [];
  for (var i = lighter.steps; i > 0; i--) {
    var lightness = baseColorOKLCH[0] + (lighter.targetBrightness - baseColorOKLCH[0]) / lighter.steps * i;
    var chromaValue = baseColorOKLCH[1] - (1 - lighter.saturationAdjustment) * lighter.saturationScale * baseColorOKLCH[1] / lighter.steps * i;
    var newColor = chroma.oklch(lightness, chromaValue, baseColorOKLCH[2]);
    colorPalette.push({
      hex: newColor.hex(),
      oklch: newColor.oklch()
    });
  }
  colorPalette.push({
    hex: baseColorHex,
    oklch: baseColorOKLCH
  });
  for (var _i = 1; _i <= darker.steps; _i++) {
    var _lightness = baseColorOKLCH[0] - (baseColorOKLCH[0] - darker.targetBrightness) / darker.steps * _i;
    var _chromaValue = baseColorOKLCH[1] - (1 - darker.saturationAdjustment) * darker.saturationScale * baseColorOKLCH[1] / darker.steps * _i;

    // 色相调整因子
    var hue = baseColorOKLCH[2] * darker.hueAdjustment;

    // 确保色相值在 0 到 360 之间
    if (hue > 360) {
      hue = hue % 360;
    } else if (hue < 0) {
      hue = 360 + hue % 360;
    }
    var _newColor = chroma.oklch(_lightness, _chromaValue, hue);
    colorPalette.push({
      hex: _newColor.hex(),
      oklch: _newColor.oklch()
    });
  }
  return options.reverse ? colorPalette.reverse() : colorPalette;
};
export var generateNeutralPalette = function generateNeutralPalette(baseColorHex) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var baseColor = chroma(baseColorHex);
  var baseColorOKLCH = baseColor.oklch();

  // 计算中性颜色的色相
  var neutralHue = baseColorOKLCH[2];

  // 将主色的饱和度降低以获得中性颜色
  var neutralChromaValue = options.neutral ? baseColorOKLCH[1] * 0.2 : 0;

  // 使用降低饱和度的颜色作为基础色重新生成色板
  var neutralBaseColor = chroma.oklch(baseColorOKLCH[0], neutralChromaValue, neutralHue);
  return generateColorPalette(neutralBaseColor.hex(), options);
};