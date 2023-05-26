import { extractStaticStyle } from 'antd-style';
import { ReactNode } from 'react';
import { SiteConfigToken } from '../../types';
export interface ThemeProviderProps {
    token?: Partial<SiteConfigToken>;
    children?: ReactNode;
    ssrInline?: boolean;
    cache?: typeof extractStaticStyle.cache;
}
export declare const ThemeProvider: ({ children, token, ssrInline, cache }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
