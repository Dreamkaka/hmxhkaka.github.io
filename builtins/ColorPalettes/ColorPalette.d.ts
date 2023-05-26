import { FC } from 'react';
interface Palette {
    key: string;
    colors: string[];
}
interface ColorPaletteProps {
    palette: Palette[];
}
declare const ColorPalette: FC<ColorPaletteProps>;
export default ColorPalette;
