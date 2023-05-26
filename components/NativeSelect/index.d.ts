import { CSSProperties, FC, ReactNode } from 'react';
interface OptionType {
    label: ReactNode;
    icon?: ReactNode;
    value: string | number | null;
}
export interface NativeSelectProps {
    value?: number;
    options?: OptionType[];
    prefixCls?: string;
    onChange?: (index: number) => void;
    renderValue?: (index: number) => ReactNode;
    renderItem?: (item: OptionType, index: number) => ReactNode;
    style?: CSSProperties;
}
declare const NativeSelect: FC<NativeSelectProps>;
export default NativeSelect;
