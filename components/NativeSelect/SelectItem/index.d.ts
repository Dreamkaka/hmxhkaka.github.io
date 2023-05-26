import { FC, ForwardedRef } from 'react';
interface SelectItemProps {
    value: any;
    label: any;
    prefixCls: string;
    isSelected?: boolean;
    isActive?: boolean;
    ref?: ForwardedRef<HTMLButtonElement>;
    disabled?: boolean;
}
declare const SelectItem: FC<SelectItemProps>;
export default SelectItem;
