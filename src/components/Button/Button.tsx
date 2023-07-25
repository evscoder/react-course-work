import React, {FC, MouseEventHandler} from 'react';
import styles from './Button.module.scss';
import cn from 'clsx';
import {Colors} from '../types';
export interface Props {
    title?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    children: React.ReactNode,
    type?: 'secondary',
    color?: Colors
}

const Button: FC<Props> = ({ type, title, disabled, onClick, children, color }) => {
    return (
        <button className={cn(styles['button'], type && styles[`button--${type}`], color && styles[`button--${color}`])} title={title} disabled={disabled} onClick={onClick}>
            { children }
        </button>
    );
};

export default Button;
