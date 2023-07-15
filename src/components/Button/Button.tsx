import React, {FC, MouseEventHandler} from "react";
import styles from './Button.module.scss';
import cn from 'clsx';
interface Props {
    title?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    children: React.ReactNode,
    type?: 'secondary'
}

const Button: FC<Props> = ({ type, title, disabled, onClick, children }) => {
    return (
        <button className={cn(styles['button'], type && styles[`button--${type}`])} title={title} disabled={disabled} onClick={onClick}>
            { children }
        </button>
    )
}

export default Button;
