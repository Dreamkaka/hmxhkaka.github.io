import type { GetCustomToken } from 'antd-style';
declare module 'antd-style' {
    interface CustomToken extends SiteToken {
    }
}
/**
 * @title 站点主题 Token
 * @description 站点的一些基础配置信息
 */
export interface SiteToken {
    /**
     * @title 头部高度
     */
    headerHeight: number;
    /**
     * @title 底部高度
     */
    footerHeight: number;
    /**
     * @title 侧边栏宽度
     */
    sidebarWidth: number;
    /**
     * @title 目录宽度
     */
    tocWidth: number;
    /**
     * @title 内容最大宽度
     * @description 文本内容的最大宽度 1152
     */
    contentMaxWidth: number | string;
    /**
     * @title 渐变色1
     */
    gradientColor1: string;
    /**
     * @title 渐变色2
     */
    gradientColor2: string;
    /**
     * @title 渐变色3
     */
    gradientColor3: string;
    /**
     * @title 渐变背景色
     */
    gradientHeroBgG: string;
    /**
     * @title 默认图标渐变色
     */
    gradientIconDefault: string;
    /**
     * @title 实色
     */
    colorSolid: string;
    /**
     * @title 代码高亮字体
     */
    fontFamilyHighlighter: string;
    /**
     * 是否让 Demo 继承站点主题
     */
    demoInheritSiteTheme: boolean;
}
export declare const createCustomToken: GetCustomToken<SiteToken>;
