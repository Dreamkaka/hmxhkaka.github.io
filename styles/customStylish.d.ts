import { GetCustomStylish } from 'antd-style';
declare module 'antd-style' {
    interface CustomStylish extends SiteStylish {
    }
}
export interface SiteStylish {
    clickableText: string;
    resetLinkColor: string;
    heroButtonGradient: string;
    heroGradient: string;
    heroTextShadow: string;
    heroGradientFlow: string;
    heroBlurBall: string;
    iconGradientDefault: string;
    blur: string;
}
export declare const getCustomStylish: GetCustomStylish<SiteStylish>;
