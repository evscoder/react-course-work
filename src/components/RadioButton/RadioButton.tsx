import React, {FC} from "react";
import styles from './RadioButton.module.scss';
import cn from 'clsx';
import {Colors, Types} from "../types";
interface Props {
    id: string,
    title?: string,
    color?: Colors,
    type?: Types,
    name: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const RadioButton: FC<Props> = ({ id, title , color, type, name, onChange}) => {
    return (
        <label className={cn(styles['radio-button'], styles[`radio-button--${color}`], styles[`radio-button--${type}`])} title={title}>
            <input type="radio" id={id} name={name} onChange={onChange} data-type={type} data-color={color}/>
            <span className={styles['radio-button__marker']}></span>
        </label>
    )
}

export default RadioButton;
