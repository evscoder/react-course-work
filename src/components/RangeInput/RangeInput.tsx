import {FC} from 'react';
import styles from './RangeInput.module.scss';
export interface Props {
    id?: string,
    min: number,
    max: number,
    value?: string,
    step: number,
    name?: string,
    title?: string,
    disabled?: boolean
}
const RangeInput: FC<Props> = ({ id, name, min, max, value, step, disabled, title}) => {
    return (
        <input
            className={styles['range-input']}
            type="range"
            id={id}
            name={name}
            min={min}
            max={max}
            value={value}
            step={step}
            disabled={disabled}
            title={title}
            onChange={() => {
                console.log('change');
            }}
        />
    );
};

export default RangeInput;
