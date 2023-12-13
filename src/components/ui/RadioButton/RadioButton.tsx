import React, {FC, useRef} from 'react';
import styles from './RadioButton.module.scss';
import cn from 'clsx';
import {useDispatch} from 'react-redux';
import {gameChangeShape} from '../../../redux/gameSlice';
import {Colors, Types} from '../../../types/types';

export interface Props {
    id: string,
    title?: string,
    color?: Colors,
    type?: Types,
    name: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const RadioButton: FC<Props> = ({ id, color, type, ...props}) => {
    const dispatch = useDispatch();
    const inputElement = useRef<HTMLInputElement>(null);

    const onChangeShape = () => {
        const button = inputElement.current;
        const buttonType = button?.dataset.type;
        const buttonColor = button?.dataset.color;
        const shapeData = document.body.dataset;

        shapeData.shape = buttonType;
        shapeData.color = buttonColor;

        dispatch(gameChangeShape({
            shape: shapeData.shape,
            color: shapeData.color
        }));
    };

    return (
        <label className={cn(styles.radioButton, styles[`radio-button--${color}`], styles[`radio-button--${type}`])} title={props.title}>
            <input ref={inputElement} type="radio" id={id} data-testid={id} name={props.name} onChange={onChangeShape} data-type={type} data-color={color} />
            <span className={styles.radioButton__marker}></span>
        </label>
    );
};

export default RadioButton;
