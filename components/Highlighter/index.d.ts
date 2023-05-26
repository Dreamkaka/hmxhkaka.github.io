import { CSSProperties, FC } from 'react';
import { PrismSyntaxTheme } from "./Prism";
import { ShikiSyntaxTheme } from "./useShiki";
import { LanguageKeys } from './language';
export { Prism } from './Prism';
export interface HighlighterSyntaxTheme {
    shiki?: Partial<ShikiSyntaxTheme>;
    prism?: Partial<PrismSyntaxTheme>;
}
/**
 * 语法高亮器的属性
 */
export interface HighlighterProps {
    /**
     * 需要进行语法高亮的文本内容
     */
    children: string;
    /**
     * 语言类型，可以是语言的字符串标识或者枚举类型
     */
    language: LanguageKeys | string;
    /**
     * 语法高亮器的类型
     * @default 'shiki'
     */
    type?: 'shiki' | 'prism';
    /**
     * 是否显示背景容器
     * @default true
     */
    background?: boolean;
    /**
     * 组件的类名
     */
    className?: string;
    /**
     * 是否移除前置与后置的空格
     * @default true
     */
    trim?: boolean;
    /**
     * 组件的样式
     */
    style?: CSSProperties;
    /**
     * 语法高亮器的主题
     */
    syntaxThemes?: HighlighterSyntaxTheme;
    /**
     * 是否可拷贝
     */
    copyable?: boolean;
}
export declare const Highlighter: FC<HighlighterProps>;
export default Highlighter;
