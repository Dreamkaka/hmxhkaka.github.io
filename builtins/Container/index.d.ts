import { type FC, type ReactNode } from 'react';
declare const Container: FC<{
    type: 'info' | 'warning' | 'success' | 'error';
    title?: string;
    children: ReactNode;
}>;
export default Container;
