/// <reference types="react" />
import type { HighlighterProps } from './index';
declare type SyntaxHighlighterProps = Pick<HighlighterProps, 'language' | 'type' | 'children' | 'syntaxThemes'>;
declare const SyntaxHighlighter: import("react").NamedExoticComponent<SyntaxHighlighterProps>;
export default SyntaxHighlighter;
