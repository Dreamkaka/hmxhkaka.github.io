export * from './selectors';
export * from './useSiteStore';
/**
 * @title 数据选择器
 */
export declare const siteSelectors: {
    /**
     * @title API 头部选择器
     */
    apiHeader: (s: import("./useSiteStore").SiteStore) => import("..").ApiHeaderProps;
    /**
     * @title 扁平化侧边栏选择器
     */
    flattenSidebar: (s: import("./useSiteStore").SiteStore) => import("dumi/dist/client/theme-api/types").ISidebarItem[];
    token: (s: import("./useSiteStore").SiteStore) => any;
};
