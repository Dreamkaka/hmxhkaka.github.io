/// <reference types="react" />
export interface PrismSyntaxTheme {
    dark: {
        [key: string]: React.CSSProperties;
    };
    light: {
        [key: string]: React.CSSProperties;
    };
}
export interface HighlighterProps {
    children: string;
    language: string;
    theme?: Partial<PrismSyntaxTheme>;
}
export declare const Prism: import("react").NamedExoticComponent<HighlighterProps>;
