import { Highlighter, Theme } from 'shiki-es';
export interface ShikiSyntaxTheme {
    dark: Theme;
    light: Theme;
}
export interface ShikiOptions {
    onInit?: (instance: Highlighter) => void;
    onLoadingChange?: (loading: boolean) => void;
    theme?: Partial<ShikiSyntaxTheme>;
}
export declare const useShiki: ({ onLoadingChange, theme }: ShikiOptions) => (text: string, language: any, isDarkMode: boolean) => string | undefined;
