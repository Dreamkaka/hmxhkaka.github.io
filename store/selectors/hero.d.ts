import { IFeature } from '../../types';
import { SiteStore } from '../useSiteStore';
export declare const isHeroPageSel: (s: SiteStore) => boolean;
/**
 * Hero Title 选择器
 * 选择逻辑：优先使用 hero 配置的 title， 再兜底到 themeConfig 中的 name
 */
export declare const heroTitleSel: (s: SiteStore) => any;
/**
 * Hero description 选择器
 * 选择逻辑：优先使用 hero 配置的 description， 再兜底到 themeConfig 中的 name
 */
export declare const heroDescSel: (s: SiteStore) => any;
/**
 * Hero Action 选择器
 * 选择逻辑：优先使用 hero 配置的 actions， 再兜底到 themeConfig 中的 actions
 */
export declare const heroActionsSel: (s: SiteStore) => any;
/**
 * Features 选择器
 */
export declare const featuresSel: (s: SiteStore) => IFeature[];
