import { AnchorItem } from "../..";
import { ISidebarItem } from 'dumi/dist/client/theme-api/types';
import { SiteStore } from '../useSiteStore';
export * from './apiHeader';
export * from './hero';
export * from './siteBasicInfo';
export * from './token';
export declare const activePathSel: (s: SiteStore) => string;
/**
 * toc 锚点选择器
 * @param s
 */
export declare const tocAnchorItemSel: (s: SiteStore) => AnchorItem[];
/**
 * 将 sidebar 信息扁平化
 * @param s
 */
export declare const flattenSidebarSel: (s: SiteStore) => ISidebarItem[];
export declare const contentBottomSel: (s: SiteStore) => {
    prev: ISidebarItem;
    currentIndex: number;
    next: ISidebarItem;
};
