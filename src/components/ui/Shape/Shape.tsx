import {FC, useRef} from 'react';
import styles from './Shape.module.scss';
import cn from 'clsx';
import {gameToggleShape} from '../../../redux/gameSlice';
import {useDispatch} from 'react-redux';

interface Props {
    id: string
    isActive: boolean;
}

const Shape: FC<Props> = ({ id, isActive }) => {
    const dispatch = useDispatch();
    const shapeElement = useRef<HTMLDivElement>(null);

    const onToggleShape = (): void => {
        const el = shapeElement.current as HTMLDivElement;
        const cellId = el?.id.split('_');
        const row = +cellId[0];
        const col = +cellId[1];

        dispatch(gameToggleShape({row, col}));
    };

    return (
        <div ref={shapeElement} id={id} className={cn(styles.shape, isActive && styles.isActive, 'shape')} onClick={onToggleShape}></div>
    );
};

export default Shape;
