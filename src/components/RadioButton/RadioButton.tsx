import {FC} from "react";
import styles from './RadioButton.module.scss';
import cn from 'clsx';
interface Props {
    id: string,
    title?: string,
    color?: 'purple' | 'blue' | 'pink' | 'green' | 'yellow' | 'white' | 'emoji',
    type?: 'circle' | 'triangle',
    name: string
}

const RadioButton: FC<Props> = ({ id, title , color, type, name }) => {
    return (
        <label className={cn(styles['radio-button'], styles[`radio-button--${color}`], styles[`radio-button--${type}`])} title={title}>
            <input type="radio" id={id} name={name}/>
            <span className={styles['radio-button__marker']}></span>
        </label>
    )
}

export default RadioButton;
