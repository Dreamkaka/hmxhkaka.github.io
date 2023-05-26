import React, { Component, ReactNode, RefObject } from 'react';
declare type Props = {
    children: ReactNode;
    className?: string;
    elementType?: string;
    height?: string | number;
    offset?: string | number;
    threshold?: number;
    width?: number | string;
    onContentVisible?: () => void;
};
declare type State = {
    visible: boolean;
};
export declare class IntersectionLoad extends Component<Props, State> {
    static defaultProps: {
        elementType: string;
        className: string;
        offset: number;
        threshold: number;
        width: null;
        onContentVisible: null;
        height: null;
    };
    elementObserver: IntersectionObserver | null;
    wrapper: RefObject<HTMLElement> | null;
    constructor(props: Props);
    componentDidMount(): void;
    shouldComponentUpdate(_: Props, nextState: State): boolean;
    componentWillUnmount(): void;
    getEventNode(): HTMLElement | (Window & typeof globalThis);
    lazyLoadHandler: (entries: IntersectionObserverEntry[]) => void;
    render(): React.ReactElement<{
        className: string;
        style: {
            width: string | number | undefined;
        };
        ref: React.RefObject<HTMLElement> | null;
    }, string | React.JSXElementConstructor<any>>;
}
export {};
