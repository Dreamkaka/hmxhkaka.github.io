import { useRouteMeta } from 'dumi';
import { type FC } from 'react';
declare type IContentTabs = ReturnType<typeof useRouteMeta>['tabs'];
export interface IContentTabsProps {
    tabs: IContentTabs;
    tabKey: string | null;
    onChange: (tab?: NonNullable<IContentTabs>[0]) => void;
}
declare const ContentTabs: FC<IContentTabsProps>;
export default ContentTabs;
