import {forwardRef} from 'react';
import styles from './RangeInput.module.scss';
import {RangeInputProps} from '../../../types/types';

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(({ ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={styles['range-input']}
            type="range"
            id={props.id}
            name={props.name}
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            disabled={props.disabled}
            title={props.title}
            onChange={props.onChange}
        />
    );
});

export default RangeInput;
