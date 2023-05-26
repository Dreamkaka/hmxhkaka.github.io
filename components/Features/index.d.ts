import { CSSProperties, type FC } from 'react';
import { IFeature } from '../../types';
/**
 * @title Features Props
 */
export interface FeaturesProps {
    /**
     * @title Feature items
     * @description An array of feature items
     */
    items: IFeature[];
    /**
     * @title Style
     */
    style?: CSSProperties;
}
declare const Features: FC<FeaturesProps>;
export default Features;
