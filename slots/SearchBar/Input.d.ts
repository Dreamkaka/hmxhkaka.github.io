import React from 'react';
declare type NativeInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Input: React.ForwardRefExoticComponent<{
    onChange: (keywords: string) => void;
    className: string;
} & Pick<NativeInputProps, "onFocus" | "onBlur"> & React.RefAttributes<HTMLInputElement>>;
export {};
