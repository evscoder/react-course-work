import React, {FC} from "react";
import styles from './RadioButton.module.scss';
import cn from 'clsx';
interface Props {
    id: string,
    title?: string,
    color?: 'purple' | 'blue' | 'pink' | 'green' | 'yellow' | 'white' | 'emoji',
    type?: 'square' | 'circle' | 'triangle',
    name: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const RadioButton: FC<Props> = ({ id, title , color, type, name, onChange }) => {
    return (
        <label className={cn(styles['radio-button'], styles[`radio-button--${color}`], styles[`radio-button--${type}`])} title={title}>
            <input type="radio" id={id} name={name} onChange={onChange} data-type={type}/>
            <span className={styles['radio-button__marker']}></span>
        </label>
    )
}

export default RadioButton;
