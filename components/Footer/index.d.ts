import { FooterProps as RcProps } from 'rc-footer';
import { type FC } from 'react';
export interface FooterProps {
    columns: RcProps['columns'];
    bottom?: RcProps['bottom'];
    theme?: RcProps['theme'];
}
declare const Footer: FC<FooterProps>;
export default Footer;
