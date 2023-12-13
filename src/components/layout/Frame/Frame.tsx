import {forwardRef} from 'react';
import styles from './Frame.module.scss';
import Shape from '../../ui/Shape/Shape';

interface Props {
    isElements: number[][]
}

const Frame = forwardRef<HTMLDivElement, Props>(({isElements}, frameElement ) => {
    return (
        <div ref={frameElement} className={styles['frame']}>
            {isElements.map((shapes, i: number) => {
                return (
                    <div className={styles['frame__row']} key={`${i}_frame_row`}>
                        {shapes.map((_, j: number ) => {
                            return (
                                <Shape id={`${i}_${j}`} isActive={!!isElements[i][j]} key={`${i}_${j}_shape`} />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
});
export default Frame;
