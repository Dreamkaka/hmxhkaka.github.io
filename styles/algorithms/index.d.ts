import { ColorMapToken } from 'antd/es/theme/interface/maps/colors';
import { ColorPalettes, NeutralPaletteOptions, SeedColors, TokenType } from './paletteGenerator';
export declare type TokenRelationship = (type: TokenType) => Partial<Record<keyof ColorMapToken, number>>;
interface MapTokenAlgorithm extends NeutralPaletteOptions {
    relationship?: TokenRelationship;
    seedColors?: Partial<SeedColors>;
    infoColorFollowPrimary?: boolean;
    adjustWarning?: boolean;
    brandColor?: string;
}
export declare const genMapTokenAlgorithm: (params?: MapTokenAlgorithm) => {
    palettes: ColorPalettes;
    tokens: Partial<Record<keyof ColorMapToken, string>>;
};
export type { ColorPalettes } from './paletteGenerator';
