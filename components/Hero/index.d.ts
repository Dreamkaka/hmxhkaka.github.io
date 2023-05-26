import { type FC } from 'react';
import { IAction } from "../..";
/**
 * @title 头图组件属性
 */
export interface HeroProps {
    /**
     * @title 标题
     * @description 头图组件的标题，可选
     */
    title?: string;
    /**
     * @title 描述
     * @description 描述，可选
     */
    description?: string;
    /**
     * @title 操作
     * @description 操作按钮，可选
     * @typedef {Object} Action
     * @property {string} text - 操作按钮的文本
     * @property {string} link - 操作按钮跳转的链接
     * @property {boolean} openExternal - 是否打开外部链接
     * @type {Action[]}
     */
    actions?: IAction[];
}
declare const Hero: FC<HeroProps>;
export default Hero;
