import { FC, ReactNode } from 'react';
import { ApiHeaderProps } from "../..";
/**
 * @title API 标题属性
 * @extends ApiHeaderProps
 */
export interface ApiTitleProps extends ApiHeaderProps {
    /**
     * @title 标题
     */
    title: string;
    /**
     * @title 服务列表
     * @description 可选，若存在则展示 API 服务列表
     */
    serviceList?: ServiceItem[];
}
/**
 * @title 服务项
 */
export interface ServiceItem {
    /**
     * @title 服务标签
     */
    label: string;
    /**
     * @title 服务图标
     */
    icon: ReactNode;
    /**
     * @title 服务描述
     */
    children: string;
    /**
     * @title 服务链接
     */
    url: string;
}
export declare const ApiHeader: FC<ApiTitleProps>;
