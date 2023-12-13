import React, {ChangeEvent, MouseEventHandler} from 'react';

export type Types = 'square' | 'circle' | 'triangle' | string | undefined;
export type Colors = 'purple' | 'blue' | 'pink' | 'green' | 'yellow' | 'white' | 'emoji' | string | undefined;

export interface ButtonProps {
    link?: boolean,
    href?: string,
    id?: string,
    title?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | ChangeEvent<HTMLButtonElement> | undefined | any,
    children: React.ReactNode,
    type?: 'secondary',
    color?: Colors,
    size?: string,
    classNames?: string,
}

export interface RangeInputProps {
    id?: string,
    min?: number,
    max?: number,
    value?: number,
    step?: number,
    name?: string,
    title?: string,
    disabled?: boolean
    onChange?: () => void
}

export interface TooltipProps {
    placement: 'bottom' | 'top',
    content: React.ReactElement,
    children?: React.ReactElement
}
