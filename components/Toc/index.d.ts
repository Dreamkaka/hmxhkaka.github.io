import { type FC } from 'react';
import { AnchorItem } from '../../types';
/**
 * @title 目录组件属性
 */
export interface TocProps {
    /**
     * @title 目录项列表
     */
    items: AnchorItem[];
    /**
     * @title 当前激活的目录项 key 值
     */
    activeKey?: string;
    /**
     * @title 目录项切换的回调函数
     * @param activeKey - 切换后的目录项 key 值
     */
    onChange?: (activeKey: string) => void;
}
declare const Toc: FC<TocProps>;
export default Toc;
