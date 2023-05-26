import { ApiHeaderProps } from '../../types';
import { SiteStore } from '../useSiteStore';
/**
 * 判断是否需要 ApiHeader
 * @param s
 */
export declare const isApiPageSel: (s: SiteStore) => boolean;
export declare const apiHeaderSel: (s: SiteStore) => ApiHeaderProps;
