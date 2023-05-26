export interface Color {
    hex: string;
    oklch: [number, number, number];
}
/**
 * @title 阴影参数
 */
interface AdjustParams {
    /**
     * @title 步骤
     * @description 阴影的层数，即需要生成几个阴影层，默认为 5。
     */
    steps: number;
    /**
     * @title 目标亮度
     * @description 阴影的最终亮度值，取值范围为 0~255，默认为 0。
     */
    targetBrightness: number;
    /**
     * @title 色相调整
     * @description 调整阴影颜色的色相值，取值范围为 -180~180，默认为 0。
     */
    hueAdjustment: number;
    /**
     * @title 饱和度调整
     * @description 调整阴影颜色的饱和度值，取值范围为 -100~100，默认为 0。
     */
    saturationAdjustment: number;
    /**
     * @title 饱和度缩放
     * @description 缩放阴影颜色的饱和度值，取值范围为 0~1，默认为 1。
     */
    saturationScale: number;
}
export interface ColorPaletteOptions {
    lighter?: Partial<AdjustParams>;
    darker?: Partial<AdjustParams>;
    reverse?: boolean;
}
export declare type TokenType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'grey' | 'neutral';
export declare type ColorPalettes = Record<TokenType, string[]>;
export declare type SeedColors = Record<TokenType, string>;
export declare const generateColorPalette: (baseColorHex: string, options?: ColorPaletteOptions) => Color[];
export interface NeutralPaletteOptions {
    lighter?: Partial<AdjustParams>;
    darker?: Partial<AdjustParams>;
    reverse?: boolean;
    neutral?: boolean;
}
export declare const generateNeutralPalette: (baseColorHex: string, options?: NeutralPaletteOptions) => Color[];
export {};
